import React from "react";
import create from "zustand";

const useStore = create((set) => ({
	count: 1,
	setCount: (value) => set(() => ({ count: value % 11 })),
	currentAnim: "",
	setCurrentAnim: (value) =>
		set(() => ({
			currentAnim: value,
		})),
}));

export default useStore;
