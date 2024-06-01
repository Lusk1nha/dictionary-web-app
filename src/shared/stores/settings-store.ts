import { create } from "zustand";
import {
  LOCAL_FONT_STORAGE_KEY,
  LOCAL_THEME_STORAGE_KEY,
} from "../../constants";
import { Theme } from "../enums/Theme";
import { Font } from "../enums/Font";

export interface ISettingsStore {
  theme: Theme;
  font: Font;

  setSettings(settings: Partial<ISettingsStore>): void;
}

const localStorageTheme =
  (localStorage.getItem(LOCAL_THEME_STORAGE_KEY) as Theme) || Theme.Light;

const localStorageFont = localStorage.getItem(LOCAL_FONT_STORAGE_KEY) as Font;

export const useSettingsStore = create<ISettingsStore>((set) => ({
  theme: localStorageTheme || Theme.Light,
  font: localStorageFont || Font.SANS_SERIF,

  setSettings: (settings) => set({ ...settings }),
}));
