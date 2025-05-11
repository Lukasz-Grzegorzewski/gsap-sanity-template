"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import illustration from "./illustartion.svg";

gsap.registerPlugin(useGSAP);

export default function Illustration() {
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 500 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="w-full max-w-[650px]">
      <Image
        ref={imageRef}
        src={illustration}
        alt="illustration"
        width={650}
        height={382}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
