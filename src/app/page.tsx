"use client";
import { useEffect } from "react";

import { logger } from "@/shared/logger";
import { AppButton } from "@/shared/ui/appButton";

export default function Home() {
  useEffect(() => {
    logger("Hello from logger");
  }, []);

  return (
    <main className="bg-slate-50">
      <h1>Vbrato</h1>

      <AppButton>Click me</AppButton>

      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
    </main>
  );
}
