import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { HandleIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, min = 0, max = 100, ...props }, ref) => {
  const [values, setValues] = React.useState<number[]>(props.value as number[] || [min, max])

  React.useEffect(() => {
    if (props.value) {
      setValues(props.value as number[])
    }
  }, [props.value])

  return (
    <div className="flex flex-col gap-2">
      <SliderPrimitive.Root
        ref={ref}
        className={cn(
          "relative flex w-[251px] touch-none select-none items-center",
          className
        )}
        onValueChange={(value) => {
          setValues(value)
          props.onValueChange?.(value)
        }}
        min={min}
        max={max}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-[8px] w-full grow overflow-hidden rounded-[1000px] bg-[#003A2F]">
          <SliderPrimitive.Range className="absolute h-full bg-[#003A2F]" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="relative cursor-pointer">
          <div style={{boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"}} className="absolute bottom-[30px] left-[-5px] w-[62px] h-[40px] rounded-[4px] bg-white flex items-center justify-center font-poppins text-[14px] leading-[16px] tracking-[0.44px] text-black">
            {values[0]}
          </div>
          <HandleIcon className="absolute -left-[2px] -top-[2px]" />
        </SliderPrimitive.Thumb>
        <SliderPrimitive.Thumb className="relative cursor-pointer">
          <div style={{boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"}} className="absolute bottom-[30px] left-[-5px] w-[62px] h-[40px] rounded-[4px] bg-white flex items-center justify-center font-poppins text-[14px] leading-[16px] tracking-[0.44px] text-black">
            {values[1]}
          </div>
          <HandleIcon className="absolute -left-[2px] -top-[2px]" />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
      <div className="flex justify-between text-sm font-poppins">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  )
})
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
