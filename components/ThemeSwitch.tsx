"use client";

import { LightningBoltIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <LightningBoltIcon width={36} height={36} />;

  if (resolvedTheme === "dark") {
    return <SunIcon width={36} height={36} onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return (
      <MoonIcon
        width={36}
        height={36}
        color="black"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
