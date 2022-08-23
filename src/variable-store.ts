import { writable } from "svelte/store";

export const points = writable(0);
export const crewmate_count = writable(0);

globalThis.setPoints = (v: number) => points.set(v);