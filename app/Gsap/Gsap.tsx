import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Gsap() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      for (let i = 0; i < 13 * 8; i++) {
        const rect = document.createElement("div");
        rect.classList.add("rect");
        container.current.querySelector(".container")?.appendChild(rect);
      }

      const tl = gsap.timeline()
        .from(".rect", {
          scale: 0,
          rotation: -360,
          duration: 0.5,
          stagger: {
            each: 0.1,
            from: "start",
            grid: "auto",
          },
        })
        .addLabel("complete");

      tl.tweenTo("complete", {
        duration: 4,
        ease: "slow(0.4, 0.9, false)",
        repeat: -1,
        repeatDelay: 0.5,
      });
    }
  }, []);

  return (
    <div ref={container}>
      <div className="container"></div>
    </div>
  );
}
