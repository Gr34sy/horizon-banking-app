"use client";

import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        end={amount}
        decimal="."
        separator=","
        prefix="$"
        decimals={2}
        duration={2.5}
      />
    </div>
  );
};

export default AnimatedCounter;
