"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShieldHalved,
    faRing,
    faDragon,
    faScroll,
    faHandFist,
    faDungeon,
    faDiceD20,
    faGear,
    faCircleHalfStroke,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    return (
        <nav className="flex-1 flex flex-col items-center justify-between mt-8">
            <section className="flex flex-col items-center justify-between gap-6">
                <FontAwesomeIcon
                    icon={faDungeon}
                    className="text-xl text-slate-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                    icon={faRing}
                    className="text-xl text-slate-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                    icon={faShieldHalved}
                    className="text-xl text-slate-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                    icon={faDragon}
                    className="text-xl text-slate-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                    icon={faScroll}
                    className="text-xl text-slate-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                    icon={faHandFist}
                    className="text-xl text-slate-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                />
                <FontAwesomeIcon
                    icon={faDiceD20}
                    className="text-xl text-slate-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                />
                <div
                    className="relative
                    before:content-[''] before:absolute before:-top-1 before:-right-1 before:w-2 before:h-2 before:bg-red-500 before:rounded-full
                    after:content-[''] after:absolute after:-top-1 after:-right-1 after:w-2 after:h-2 after:bg-red-500 after:rounded-full after:animate-ping"
                >
                    <FontAwesomeIcon
                        icon={faGear}
                        className="text-xl text-slate-700 hover:text-yellow-500 transition-colors duration-300 cursor-pointer"
                    />
                </div>
            </section>
            <section className="hidden md:flex flex-col h-28 w-14 bg-slate-300 bg-opacity-50 rounded-2xl p-1">
                <div className="flex-1 w-full aspect-square flex justify-center items-center bg-white rounded-xl hover:cursor-pointer">
                    <FontAwesomeIcon
                        icon={faCircleHalfStroke}
                        className="text-xl text-slate-700"
                    />
                </div>
                <div className="flex-1 w-full aspect-square flex justify-center items-center rounded-xl hover:cursor-pointer">
                    <FontAwesomeIcon
                        icon={faCircle}
                        className="text-xl text-slate-700"
                    />
                </div>
            </section>
        </nav>
    );
}
