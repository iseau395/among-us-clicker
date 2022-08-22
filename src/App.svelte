<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { points } from "./points";
    import Store from "./store/Store.svelte";
    import { FloatingThing } from "./floating-thing";

    const crewmates = ["black", "blue", "black", "brown", "darkgreen"].map(
        (c) => `./media/crewmates/${c}.png`
    );

    let backgound_x = 0;
    let backgound_y = 0;

    let crewmate_rotation = 0;

    let floating_things: FloatingThing[] = [];

    const crewmate_autoclick_time = 2000;
    let crewmate_count = 0;

    function load_save() {
        if (localStorage.getItem("last-time") && localStorage.getItem("last-score") && localStorage.getItem("last-crewmate-count")) {
            crewmate_count = +localStorage.getItem("last-crewmate-count");

            const seconds_elapsed = (Date.now() - (+localStorage.getItem("last-time")) * 60000) / 1000;
            $points = +localStorage.getItem("last-score") + seconds_elapsed / 2;

            for (let i = 0; i < crewmate_count; i++) {
                floating_things.push(
                    new FloatingThing(
                        crewmates[
                            Math.round(Math.random() * (crewmates.length - 1))
                        ]
                    )
                );
            }

            floating_things = floating_things.sort((a, b) => a.distance - b.distance);
        } else {
            floating_things = [];
            crewmate_count = 0;
            $points = 0;
        }
    }

    load_save();

    globalThis.resetAmongus = () => {
        localStorage.clear();
        load_save();
    }

    let animation_frame = null;
    let autoclick_timer: NodeJS.Timer;
    let autosave_timer: NodeJS.Timer;

    function purchase(e: CustomEvent<number>) {
        if (e.detail == 0) {
            floating_things.push(
                new FloatingThing(
                    crewmates[
                        Math.round(Math.random() * (crewmates.length - 1))
                    ]
                )
            );
            floating_things = floating_things.sort((a, b) => a.distance - b.distance);

            crewmate_count++;
        }
    }

    onMount(() => {
        function tick_animation() {
            backgound_x += 0.05;
            backgound_y += 0.05;

            backgound_x = backgound_x % 512;
            backgound_y = backgound_y % 512;

            crewmate_rotation += 0.05;

            crewmate_rotation = crewmate_rotation % 360;

            for (const thing of floating_things) {
                thing.float_amount += thing.distance / 2 * thing.direction * 0.001;
                thing.height += thing.distance * thing.vertical_direction * 0.0005;

                thing.rotation +=
                    (Math.round(
                        (thing.distance * 1984) / thing.vertical_direction +
                            thing.direction * 2048
                    ) %
                        1000) /
                    5000;

                if (thing.float_amount > 1 || thing.float_amount < 0)
                    thing.regen();
            }

            floating_things = floating_things.sort((a, b) => a.distance - b.distance);

            animation_frame = requestAnimationFrame(tick_animation);
        }

        tick_animation();

        function tick_crewmates() {
            $points += crewmate_count * (50 / crewmate_autoclick_time);
        }
        autoclick_timer = setInterval(tick_crewmates, 50);

        function autosave() {
            localStorage.setItem("last-time", (Date.now() / 60000).toString());
            localStorage.setItem("last-score", $points.toString());
            localStorage.setItem("last-crewmate-count", crewmate_count.toString());
        }
        autosave_timer = setInterval(autosave, 1000);
    });

    onDestroy(() => {
        if (animation_frame) cancelAnimationFrame(animation_frame);
        if (autoclick_timer) clearTimeout(autoclick_timer);
        if (autosave_timer) clearTimeout(autosave_timer);
    });
</script>

<p>{Math.floor($points)}</p>
<main
    style="background-position: {Math.floor(backgound_x)}px {Math.floor(
        backgound_y
    )}px"
>
    {#each floating_things as thing}
        <img
            class="background-crewmate"
            src={thing.texture}
            style="rotate: {thing.rotation}deg; transform: scale({thing.distance /
                2 +
                0.05}); top: {thing.height * (window.innerHeight - 100) -
                200}px; left: {thing.float_amount * (window.innerWidth + 300) -
                300}px;"
            alt="something floating"
        />
    {/each}

    <img
        class="foreground-crewmate"
        src="./media/crewmates/red.png"
        alt="among us"
        draggable="false"
        style="rotate: {crewmate_rotation}deg;"
        on:click={() => $points++}
    />
</main>
<Store on:purchase={purchase} />

<style>
    main {
        background-image: url("./media/space.png");

        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        user-select: none;
    }

    p {
        background-image: url("./media/score-background.png");

        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0px -25px;

        text-align: right;

        width: 275px;
        height: 75px;

        font-family: "Amatic SC", cursive;
        color: white;
        font-size: 50px;

        position: absolute;

        padding-top: 0px;
        padding-left: 15px;
        padding-bottom: 20px;
        padding-right: 65px;

        /* width: 100px; */

        display: inline;
        margin: 0px;

        z-index: 2;
    }

    img.background-crewmate {
        position: absolute;
    }

    img.foreground-crewmate {
        transform: scale(0.5);
        z-index: 1;
    }
</style>
