import React from "react";
import create from "zustand";

const useStore = create((set) => ({
	count: 0,
	setCount: (value) => set(() => ({ count: value % 11 })),
}));

export default useStore;
