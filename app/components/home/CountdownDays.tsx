"use client";

import { useEffect, useState } from "react";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";

export default function CountdownDays({
  targetTime,
  initialDays,
}: {
  targetTime: number;
  initialDays: string;
}) {
  const [daysRemaining, setDaysRemaining] = useState(initialDays);

  useEffect(() => {
    const updateDays = () => {
      const difference = Math.max(targetTime - Date.now(), 0);
      setDaysRemaining(String(Math.floor(difference / 86400000)).padStart(3, "0"));
    };

    updateDays();
    const intervalId = window.setInterval(updateDays, 60000);
    return () => window.clearInterval(intervalId);
  }, [targetTime]);

  return <DigitalNumber value={daysRemaining} />;
}
