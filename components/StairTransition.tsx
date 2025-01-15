"use client";
import { AnimatePresence } from "motion/react";
import Stairs from "./Stairs";
import { usePathname } from "next/navigation";

const StairTransition = () => {
    const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
