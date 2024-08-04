"use client";

import Image from "next/image";
import { MouseEvent, useRef } from "react";
import bgBase from "../../../public/images/irelia-base-4.jpg";
import bgIrelia from "../../../public/images/irelia-5.png";
import bgBlades2 from "../../../public/images/irelia-blades-2.png";
import bgBlades3 from "../../../public/images/irelia-blades-3.png";

export default function Background() {
    const base = useRef<null | HTMLImageElement>(null);
    const irelia = useRef<null | HTMLImageElement>(null);
    const blades2 = useRef<null | HTMLImageElement>(null);
    const blades3 = useRef<null | HTMLImageElement>(null);

    function handleMouseMove(
        e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
    ) {
        if (base.current) {
            let imgMousePos = {
                x: e.clientX - base.current.offsetLeft,
                y: e.clientY - base.current.offsetTop,
            };

            const width = base.current.offsetWidth;
            const height = base.current.offsetHeight;

            const widthCenter = width / 2;
            const heightCenter = height / 2;

            const newMousePos = {
                x: (imgMousePos.x - widthCenter) * -0.01,
                y: (imgMousePos.y - heightCenter) * 0.01,
            };

            base.current.setAttribute(
                "style",
                `transform: translateX(${newMousePos.x}px) translateY(${newMousePos.y}px);`
            );
        }

        if (irelia.current) {
            let imgMousePos = {
                x: e.clientX - irelia.current.offsetLeft,
                y: e.clientY - irelia.current.offsetTop,
            };

            const width = irelia.current.offsetWidth;
            const height = irelia.current.offsetHeight;

            const widthCenter = width / 2;
            const heightCenter = height / 2;

            const newMousePos = {
                x: (imgMousePos.x - widthCenter) * -0.02,
                y: (imgMousePos.y - heightCenter) * 0.02,
            };

            irelia.current.setAttribute(
                "style",
                `transform: translateX(${newMousePos.x}px) translateY(${newMousePos.y}px);`
            );
        }

        if (blades2.current) {
            let imgMousePos = {
                x: e.clientX - blades2.current.offsetLeft,
                y: e.clientY - blades2.current.offsetTop,
            };

            const width = blades2.current.offsetWidth;
            const height = blades2.current.offsetHeight;

            const widthCenter = width / 2;
            const heightCenter = height / 2;

            const newMousePos = {
                x: (imgMousePos.x - widthCenter) * -0.02,
                y: (imgMousePos.y - heightCenter) * 0.02,
            };

            blades2.current.setAttribute(
                "style",
                `transform: translateX(${newMousePos.x}px) translateY(${newMousePos.y}px);`
            );
        }

        if (blades3.current) {
            let imgMousePos = {
                x: e.clientX - blades3.current.offsetLeft,
                y: e.clientY - blades3.current.offsetTop,
            };

            const width = blades3.current.offsetWidth;
            const height = blades3.current.offsetHeight;

            const widthCenter = width / 2;
            const heightCenter = height / 2;

            const newMousePos = {
                x: (imgMousePos.x - widthCenter) * -0.035,
                y: (imgMousePos.y - heightCenter) * 0.035,
            };

            blades3.current.setAttribute(
                "style",
                `transform: translateX(${newMousePos.x}px) translateY(${newMousePos.y}px);`
            );
        }
    }

    return (
        <div onMouseMove={handleMouseMove} className="absolute w-full h-full">
            <div className="absolute w-full h-full scale-[1.025]">
                <Image
                    ref={base}
                    src={bgBase}
                    alt="background"
                    width={5120}
                    height={2880}
                    className="w-full h-full object-cover pointer-events-none select-none"
                />
            </div>

            <div className="absolute w-full h-full scale-105">
                <Image
                    ref={irelia}
                    src={bgIrelia}
                    alt="background"
                    width={5120}
                    height={2880}
                    className="w-full h-full object-cover pointer-events-none select-none"
                />
            </div>

            <div className="absolute w-full h-full scale-105">
                <Image
                    ref={blades2}
                    src={bgBlades2}
                    alt="background"
                    width={5120}
                    height={2880}
                    className="w-full h-full object-cover pointer-events-none select-none"
                />
            </div>

            <div className="absolute w-full h-full scale-105">
                <Image
                    ref={blades3}
                    src={bgBlades3}
                    alt="background"
                    width={5120}
                    height={2880}
                    className="w-full h-full object-cover pointer-events-none select-none"
                />
            </div>
        </div>
    );
}
