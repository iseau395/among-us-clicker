<script lang="ts">
    import { points, crewmate_count } from "../variable-store";

    export let name = "Name Missing";
    export let description = "Description missing";
    export let price: number;
    export let value: number;
    export let max_value: number;

    let clicking = false;

    window.addEventListener("mouseup", () => clicking = false);

    function click() {
        if ($points >= price && $crewmate_count + value <= max_value)
            clicking = true;
    }
</script>

<div class="button" on:click on:mousedown={click}
     style="{clicking ? "box-shadow: 0px 0px; margin-top: 23px; margin-left: 23px" : "box-shadow: 3px 3px"}"
    >
    <div class="text">
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
    <p style="font-size: xx-large">{price}</p>
</div>

<style>
    div.button {
        font-family: 'Amatic SC', cursive;

        background-color: darkgray;

        height: 50px;
        width: 100%;

        margin: 20px;
        padding: 10px;

        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        user-select: none;
    }

    h1 {
        padding: 0px;

        margin: 0px;
    }

    p {
        margin: 0px;

        font-size: larger;
    }
</style>