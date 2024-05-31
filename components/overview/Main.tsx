"use client";
import React, { useState } from "react";

import MultiplierChart from "@/components/overview/MultiplierChart";
import RegisterUser from "@/app/page";
import GameDashboard from "@/app/[id]/page";
import { usePathname } from "next/navigation";
import Chat from "./Chat";

export default function Main() {
  const [isStartGame, setIsStartGame] = useState(false);
  const [speedValue, setSpeedValue] = useState(1);

  const handleStartGame = (event: any) => {
    setIsStartGame(true);
  };
  const handleSpeedChange = (event: any) => {
    setSpeedValue(event);
  };
  const pathname = usePathname();

  return (
    <main className="overflow-x-hidden grid gap-4  p-4 xs:grid-cols-1 md:grid-cols-[30%_minmax(auto,_1fr)]">
      <div
        className="relative flex-col items-start gap-8 md:flex w-30 h-full"
        x-chunk="dashboard-03-chunk-0"
      >
        {pathname !== "/" ? (
          <GameDashboard
            handleSpeedChange={handleSpeedChange}
            handleStartGame={handleStartGame}
          />
        ) : (
          <RegisterUser />
        )}
      </div>
      <div className="flex flex-col gap-5">
        <div className="relative flex flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
          {/* Chart here */}
          <MultiplierChart
            isStartGame={isStartGame}
            setIsStartGame={setIsStartGame}
            speedValue={speedValue}
          />
        </div>
        <div className="relative flex flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
          <Chat />
        </div>
      </div>
    </main>
  );
}
