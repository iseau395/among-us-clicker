import { writable } from "svelte/store";

export const points = writable(0);
export const crewmate_count = writable(0);
export const imposter_count = writable(0);

let cc = 0;
crewmate_count.subscribe((v) => {
    cc = v;
});
let ic = 0;
imposter_count.subscribe((v) => {
    ic = v;
});
export function getValue() {
    return cc + ic*2;
}

globalThis.setPoints = (v: number) => points.set(v);
globalThis.setCrewmates = (v: number) => crewmate_count.set(v);