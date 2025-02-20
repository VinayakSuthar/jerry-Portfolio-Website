"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { useAppSelector } from "@/hooks/useAppSelector";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  return <div className={isDarkMode ? "dark" : ""}>{children}</div>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}
