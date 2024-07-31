"use client";

import Image from "next/image";
import { MouseEvent, useRef } from "react";

export default function Home() {
    const ref = useRef<null | HTMLImageElement>(null);

    function handleMouseMove(
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) {
        if (ref.current) {
            let imgMousePos = {
                x: e.clientX - ref.current.offsetLeft,
                y: e.clientY - ref.current.offsetTop,
            };

            const width = ref.current.offsetWidth;
            const height = ref.current.offsetHeight;

            const widthCenter = width / 2;
            const heightCenter = height / 2;

            const newMousePos = {
                x: (imgMousePos.x - widthCenter) * -0.025,
                y: (imgMousePos.y - heightCenter) * -0.025,
            };

            ref.current.setAttribute(
                "style",
                `transform: translateX(${newMousePos.x}px) translateY(${newMousePos.y}px);`
            );
        }
    }

    return (
        <>
            <div
                onMouseMove={handleMouseMove}
                className="w-full h-full scale-105"
            >
                <Image
                    ref={ref}
                    src={
                        "https://c.wallhere.com/photos/7f/0c/anime_anime_girls_animal_ears_landscape_miko_tail-48717.jpg!d"
                    }
                    alt="background"
                    width={window.innerWidth}
                    height={window.innerHeight}
                    className="relative w-full h-full object-cover object-right"
                />
            </div>
        </>
    );
}
