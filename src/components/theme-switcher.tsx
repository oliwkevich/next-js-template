// app/components/ThemeSwitcher.tsx
"use client";

import { useEffect, useState } from "react";

import { Switch } from "@nextui-org/react";
import { IconMoon, IconSun } from "@tabler/icons-react";

import { useSystemTheme } from "@/hooks/use-system-theme";

// app/components/ThemeSwitcher.tsx

// app/components/ThemeSwitcher.tsx

// app/components/ThemeSwitcher.tsx

// app/components/ThemeSwitcher.tsx

// app/components/ThemeSwitcher.tsx

// app/components/ThemeSwitcher.tsx

// app/components/ThemeSwitcher.tsx

// app/components/ThemeSwitcher.tsx

// app/components/ThemeSwitcher.tsx

// app/components/ThemeSwitcher.tsx

// app/components/ThemeSwitcher.tsx

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const changeTheme = () => {
    return theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Switch
      size="lg"
      color="success"
      isSelected={theme === "light"}
      onValueChange={changeTheme}
      startContent={<IconSun />}
      endContent={<IconMoon />}
    />
  );
}
