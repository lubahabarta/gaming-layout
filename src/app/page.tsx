"use client";

import Image from "next/image";
import { MouseEvent, useRef } from "react";

export default function Home() {
    const background = useRef<null | HTMLImageElement>(null);
    const fireflies = useRef<null | HTMLImageElement>(null);

    function handleMouseMove(
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) {
        if (background.current) {
            let imgMousePos = {
                x: e.clientX - background.current.offsetLeft,
                y: e.clientY - background.current.offsetTop,
            };

            const width = background.current.offsetWidth;
            const height = background.current.offsetHeight;

            const widthCenter = width / 2;
            const heightCenter = height / 2;

            const newMousePos = {
                x: (imgMousePos.x - widthCenter) * -0.025,
                y: (imgMousePos.y - heightCenter) * -0.025,
            };

            background.current.setAttribute(
                "style",
                `transform: translateX(${newMousePos.x}px) translateY(${newMousePos.y}px);`
            );
        }

        if (fireflies.current) {
            let imgMousePos = {
                x: e.clientX - fireflies.current.offsetLeft,
                y: e.clientY - fireflies.current.offsetTop,
            };

            const width = fireflies.current.offsetWidth;
            const height = fireflies.current.offsetHeight;

            const widthCenter = width / 2;
            const heightCenter = height / 2;

            const newMousePos = {
                x: (imgMousePos.x - widthCenter) * -0.05,
                y: (imgMousePos.y - heightCenter) * -0.05,
            };

            fireflies.current.setAttribute(
                "style",
                `transform: translateX(${newMousePos.x}px) translateY(${newMousePos.y}px);`
            );
        }
    }

    return (
        <div onMouseMove={handleMouseMove} className="relative w-full h-full">
            <div className="absolute w-full h-full scale-105">
                <Image
                    ref={background}
                    src={
                        "https://c.wallhere.com/photos/7f/0c/anime_anime_girls_animal_ears_landscape_miko_tail-48717.jpg!d"
                    }
                    alt="background"
                    width={window.innerWidth}
                    height={window.innerHeight}
                    className="w-full h-full object-cover object-right"
                />
            </div>

            <div className="absolute w-full h-full scale-110">
                <Image
                    ref={fireflies}
                    src={
                        "https://as2.ftcdn.net/v2/jpg/05/05/91/61/1000_F_505916149_scbzOUcmARePEpwvfmt5nGED8DEO0OnI.webp"
                    }
                    alt="background"
                    width={window.innerWidth}
                    height={window.innerHeight}
                    className="absolute w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
