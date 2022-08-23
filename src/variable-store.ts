import { writable } from "svelte/store";

export const points = writable(0);
export const crewmate_count = writable(0);

let cc = 0;
crewmate_count.subscribe((v) => {
    cc = v;
})
export function getValue() {
    return cc;
}

globalThis.setPoints = (v: number) => points.set(v);
globalThis.setCrewmates = (v: number) => crewmate_count.set(v);