"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import styles from "./slider.module.css";

import { cn } from "@/lib/utils";
import SliderThumb from "./SliderThumb/SliderThumb";
import { useRouter } from "next/navigation";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  let router = useRouter();
  function handler(val: number[]) {
    if (val[0] === 400) {
      router.push("/home");
    }
  }
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        styles.SliderRoot,
      )}
      max={400}
      onValueChange={handler}
      {...props}
    >
      <SliderPrimitive.Track className={styles.SliderTrack}>
        <SliderPrimitive.Range className="absolute h-full bg-slate-900 dark:bg-slate-50" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb>
        <SliderThumb />
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
