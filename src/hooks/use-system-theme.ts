import { Dispatch, SetStateAction, useMemo } from "react";

import { useTheme } from "next-themes";

type Theme = "dark" | "light";
type SetTheme = Dispatch<SetStateAction<Theme>>;

export const useSystemTheme = () => {
  const { setTheme, theme, systemTheme } = useTheme();

  return useMemo(
    () =>
      ({
        theme: theme === "system" ? systemTheme : theme,
        setTheme,
      }) as { theme: Theme; setTheme: SetTheme },
    [theme, setTheme, systemTheme]
  );
};
