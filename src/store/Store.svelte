<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { points, crewmate_count } from '../variable-store';
    import StoreButton from "./StoreButton.svelte";

    let open = false;

    const items = [{
        name: "Crewmate",
        description: "Does tasks for you!",
        price: 50,
        value: 1,
        max_value: 250
    }]

    const dispatch = createEventDispatcher<{ "purchase": number }>();

    function register_purchase(item: number) {
        console.log($crewmate_count + items[item].value);
        console.log(items[item].max_value);

        if ($points < items[item].price) return;
        else if ($crewmate_count + items[item].value > items[item].max_value) alert("You have too much stuff! Sell something to buy more of this.");
        else $points -= items[item].price;

        dispatch("purchase", item);
    }
</script>

<div class="background" style={open ? "" : "display: none"}></div>
<img src="./media/store-button.png" alt="open store" style="right: {open ? "40%" : "0%"}" on:click={() => open = !open}/>
<div class="store-wrapper" style={open ? "" : "display: none"}>
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

        z-index: 22;
    }

    div.background {
        position: absolute;
        top: 0px;
        left: 0px;

        background-color: black;
        opacity: 0.6;

        width: 100%;
        height: 100%;

        z-index: 21;
    }

    div.store-wrapper {
        height: 100%;
        width: 40%;

        position: absolute;

        left: 60%;

        top: 0px;

        background-color: dimgray;

        z-index: 22;
    }

    div.store-trim {
        background-image: url("./media/store-trim.png");
        background-size: contain;

        margin-top: 290px;

        width: 8px;
        height: calc(100% - 290px);
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
