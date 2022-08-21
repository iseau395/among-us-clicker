<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { points } from "./points";
    import Store from "./store/Store.svelte";

    let backgound_x = 0;
    let backgound_y = 0;

    let crewmate_rotation = 0;

    let animation_frame = null;

    let crewmates = 0;
    let timer: NodeJS.Timer;

    function purchase(e: CustomEvent<number>) {
        if (e.detail == 0)
            crewmates++;
    }

    onMount(() => {
        function tick_animation() {
            backgound_x += 0.05;
            backgound_y += 0.05;

            backgound_x = backgound_x % 512;
            backgound_y = backgound_y % 512;

            crewmate_rotation += 0.05;

            crewmate_rotation = crewmate_rotation % 360;

            animation_frame = requestAnimationFrame(tick_animation);
        }

        tick_animation();

        function tick_crewmates() {
            $points += crewmates;
        }

        timer = setInterval(tick_crewmates, 1000);
    });

    onDestroy(() => {
        if (animation_frame)
            cancelAnimationFrame(animation_frame);
        if (timer)
            clearTimeout(timer);
    })
</script>

<p>{$points.toString().padStart(6, "0")}</p>
<main style="background-position: {Math.floor(backgound_x)}px {Math.floor(backgound_y)}px">
    <img src="./media/crewmates/red.png" alt="among us" draggable="false" style="rotate: {crewmate_rotation}deg;" on:click={() => $points++}/>
</main>
<Store on:purchase={purchase}></Store>

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
        background-position: -140px -10px;

        font-family: 'Amatic SC', cursive;
        color: white;
        font-size: 50px;

        position: absolute;

        padding-top: 0px;
        padding-left: 15px;
        padding-bottom: 20px;
        padding-right: 100px;

        width: 100px;

        display: inline;
        margin: 0px;
    }

    img {
        transform: scale(0.5);
    }
</style>