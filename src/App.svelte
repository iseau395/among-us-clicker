<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { points, crewmate_count, imposter_count } from "./variable-store";
    import Store from "./store/Store.svelte";
    import { FloatingThing } from "./floating-thing";

    const crewmates = ["black", "blue", "brown", "darkgreen", "orange", "pink", "purple", "yellow"].map(
        (c) => `./media/crewmates/${c}.png`
    );

    let backgound_x = 0;
    let backgound_y = 0;

    let crewmate_x = 0;
    let crewmate_y = 0;
    let crewmate_xv = 0.035;
    let crewmate_yv = 0.03;

    let crewmate_rotation = 0;

    let floating_things: FloatingThing[] = [];

    function load_save() {
        $crewmate_count = +localStorage.getItem("last-crewmate-count") ?? 0;
        $imposter_count = +localStorage.getItem("last-imposter-count") ?? 0;

        const seconds_elapsed = (Date.now() - (+localStorage.getItem("last-time") ?? 0) * 60000) / 1000;
        $points = (+localStorage.getItem("last-score") ?? 0) + seconds_elapsed / 2;

        for (let i = 0; i < $crewmate_count + $imposter_count; i++) {
            floating_things.push(
                new FloatingThing(
                    crewmates[
                        Math.floor(Math.random() * (crewmates.length))
                    ]
                )
            );
        }

        floating_things = floating_things;
    }

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
            floating_things = floating_things;

            $crewmate_count++;
        } else if (e.detail == 1) {
            floating_things.push(
                new FloatingThing(
                    crewmates[
                        Math.round(Math.random() * (crewmates.length - 1))
                    ]
                )
            );
            floating_things = floating_things;

            $imposter_count++;
        } else if (e.detail == 2) {
            floating_things.pop();
            floating_things = floating_things;

            $crewmate_count--;
        } else if (e.detail == 3) {
            floating_things.pop();
            floating_things = floating_things;

            $imposter_count--;
        }
    }

    onMount(() => {
        load_save();

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
                        thing.distance * 1984 +
                        thing.direction * 2048
                    ) % 1000) / 6000;

                if (thing.float_amount > 1.2 || thing.float_amount < -.2 || thing.height > 1.2 || thing.height < -.2)
                    thing.regen();
            }

            crewmate_xv -= crewmate_x / 5000000 * 2;
            crewmate_yv -= crewmate_y / 5000000;

            crewmate_x += crewmate_xv;
            crewmate_y += crewmate_yv;

            // floating_things = floating_things.sort((a, b) => a.distance - b.distance);
            floating_things = floating_things;

            animation_frame = requestAnimationFrame(tick_animation);
        }

        tick_animation();

        function tick_crewmates() {
            $points +=
                $crewmate_count * (50 / 2000) +
                $imposter_count * (50 / 500);
        }
        autoclick_timer = setInterval(tick_crewmates, 50);

        function autosave() {
            localStorage.setItem("last-time", (Date.now() / 60000).toString());
            localStorage.setItem("last-score", $points.toString());
            localStorage.setItem("last-crewmate-count", $crewmate_count.toString());
            localStorage.setItem("last-imposter-count", $imposter_count.toString());
        }
        autosave_timer = setInterval(autosave, 1000);
    });

    onDestroy(() => {
        if (animation_frame) cancelAnimationFrame(animation_frame);
        if (autoclick_timer) clearTimeout(autoclick_timer);
        if (autosave_timer) clearTimeout(autosave_timer);
    });
</script>

<main
style="background-position:
        {Math.floor(backgound_x)}px
        {Math.floor(backgound_y)}px"
>
    {#each floating_things as thing}
    <span
        style="
        position: absolute;
        z-index: {Math.round(thing.distance * 20)};
        transform-origin: top left;
        transform:
            scale({thing.distance / 2 + 0.05});
        top: {thing.height * 100}%;
        left: {thing.float_amount * 100}%;
        ">
        <img
            src={thing.texture}
            style="
            z-index: {Math.round(thing.distance * 20)};
            transform-origin: center center;
            transform:
                rotate({thing.rotation}deg);"
            alt="something floating"
            draggable="false"
        />
    </span>
    {/each}

    <div
        class="foreground-crewmate"
        style="
        transform: scale(0.5) rotate({crewmate_rotation}deg);
        left: {crewmate_x / 2}%;
        top: {crewmate_y / 2}%;"
        on:click={() => $points++}
    />
</main>
<p>{Math.floor($points)}</p>
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

        font-family: "Amatic SC", cursive;
        color: white;
        font-size: 50px;

        position: absolute;

        top: 0px;
        left: 0px;

        padding-top: 0px;
        padding-left: 15px;
        padding-bottom: 20px;
        padding-right: 65px;

        width: 275px;
        height: 75px;

        display: inline;
        margin: 0px;

        z-index: 22;
    }

    div.foreground-crewmate {
        z-index: 21;
        position: relative;

        width: 500px;
        height: 700px;

        background-image: url("./media/crewmates/red.png");
        background-position: center;
        background-size : contain;
        background-repeat: no-repeat;
    }
</style>
