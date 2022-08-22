<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { points } from '../points';
    import StoreButton from "./StoreButton.svelte";

    let open = false;

    const items = [{
        name: "Crewmate",
        description: "Does tasks for you!",
        price: 50
    }]

    const dispatch = createEventDispatcher<{ "purchase": number }>();

    function register_purchase(item: number) {
        if ($points < items[item].price) return;
        else $points -= items[item].price;

        dispatch("purchase", item);
    }
</script>

<div class="background" style={open ? "" : "display: none"}></div>
<img src="./media/store-button.png" alt="open store" style="right: {open ? "40%" : "0%"}" on:click={() => open = !open}/>
<div class="store-wrapper" style="left: {open ? "60%" : "100%"}">
    <div class="store-trim"></div>
    <div class="store-contents">
        {#each items as item}
        <StoreButton on:click={() => register_purchase(0)} {...item}></StoreButton>
        {/each}
    </div>
</div>

<style>
    img {
        top: 0px;
        position: absolute;

        width: 75px;

        z-index: 2;
    }

    div.background {
        position: absolute;
        top: 0px;
        left: 0px;

        background-color: black;
        opacity: 0.6;

        width: 100%;
        height: 100%;

        z-index: 1;
    }

    div.store-wrapper {
        height: 100%;
        width: 40%;

        position: absolute;

        left: 100%;

        top: 0px;

        background-color: dimgray;

        z-index: 2;
    }

    div.store-trim {
        background-image: url("./media/store-trim.png");
        background-size: contain;

        margin-top: 290px;

        width: 8px;
        height: 100%;
    }

    div.store-contents {
        position: absolute;
        top: 0px;

        width: calc(100% - 60px);
        height: 100%;

        padding-left: 40px;
        padding-right: 20px;

        display: flex;
    }
</style>