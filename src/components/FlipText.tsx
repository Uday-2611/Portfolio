'use client';
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface FlipTextProps {
    words: string[];
    className?: string;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

const FlipText: React.FC<FlipTextProps> = ({ words, className }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState(words[0]);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        let iteration = 0;
        const targetWord = words[currentWordIndex];

        if (intervalRef.current) window.clearInterval(intervalRef.current);

        intervalRef.current = window.setInterval(() => {
            setDisplayText(() =>
                targetWord
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return targetWord[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= targetWord.length) {
                if (intervalRef.current) window.clearInterval(intervalRef.current);
                // Wait before switching to next word
                setTimeout(() => {
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }, 3000);
            }

            iteration += 1 / 3;
        }, 30);

        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [currentWordIndex, words]);

    return (
        <span className={cn("inline-block font-mono", className)}>
            {displayText}
        </span>
    );
};

export default FlipText;
