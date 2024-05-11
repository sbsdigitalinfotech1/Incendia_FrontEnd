// app/providers.tsx
"use client";

import { GlobalStateProvider } from "@/store/GlobalContext";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <GlobalStateProvider>{children}</GlobalStateProvider>
    </NextUIProvider>
  );
}
