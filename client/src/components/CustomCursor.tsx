import '@/styles/CustomCursor.css'
// CustomCursor.jsx
import { useEffect, useState } from 'react'

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updatePosition);

        // Cleanup event listener
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return (
        <div
            className="custom-cursor z-100 "
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path fill="#FFF" stroke="#000" stroke-width="2" d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"></path>
            </svg>
        </div>
    );
};

export default CustomCursor;
