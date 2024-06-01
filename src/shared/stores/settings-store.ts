import { create } from "zustand";
import { LOCAL_STORAGE_KEY } from "../../constants";

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export interface ISettingsStore {
  theme: Theme;

  setSettings(settings: Partial<ISettingsStore>): void;
}

const localStorageTheme =
  (localStorage.getItem(LOCAL_STORAGE_KEY) as Theme) || Theme.Light;

export const useSettingsStore = create<ISettingsStore>((set) => ({
  theme: localStorageTheme,

  setSettings: (settings) => set({ ...settings }),
}));
