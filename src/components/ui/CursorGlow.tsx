"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-300 hidden md:block"
            aria-hidden="true"
        >
            <div
                className="absolute -translate-x-1/2 -translate-y-1/2 bg-brand-green/15 blur-[80px] rounded-full mix-blend-screen"
                style={{
                    left: position.x,
                    top: position.y,
                    width: "300px",
                    height: "300px",
                    willChange: "transform",
                }}
            />
        </div>
    );
}
