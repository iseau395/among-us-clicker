<script lang="ts">
import { onMount, onDestroy } from "svelte";


    let backgound_x = 0;
    let backgound_y = 0;

    let animation_frame = null;

    onMount(() => {
        function tick_animation() {
            backgound_x += 0.05;
            backgound_y += 0.05;

            backgound_x = backgound_x % 512;
            backgound_y = backgound_y % 512;

            animation_frame = requestAnimationFrame(tick_animation);
        }

        tick_animation();
    });

    onDestroy(() => {
        cancelAnimationFrame(animation_frame);
    })
</script>

<main style="background-position: {Math.floor(backgound_x)}px {Math.floor(backgound_y)}px">

</main>

<style>
    main {
        background-image: url("/media/space.png");

        width: 100%;
        height: 100%;
    }
</style>