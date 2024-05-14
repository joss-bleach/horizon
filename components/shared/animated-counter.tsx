"use client";
import { formatAmount } from "@/lib/utils";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  amount: number;
}

export const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
  return (
    <div className="w-full">
      <CountUp
        prefix="£"
        end={amount}
        decimals={2}
        decimal="."
        duration={2.75}
      />
    </div>
  );
};
