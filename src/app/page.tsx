"use client";
import { useEffect } from "react";

import { logger } from "@/shared/logger";
import { AppButton } from "@/shared/ui/appButton";

export default function Home() {
  useEffect(() => {
    logger("Hello from logger");
  }, []);

  return (
    <main className=" flex bg-slate-50">
      <h1>Vbrato</h1>

      <AppButton>Click me</AppButton>
    </main>
  );
}
