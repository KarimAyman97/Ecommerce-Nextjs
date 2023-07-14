"use client";
import { useEffect, useState } from "react";

export const AnnouncementDetails: React.FC = () => {
  const words = [
    "Free Shipping on Orders more than 50$.",
    "Introducing our New Collection!",
    "Save Big with our Summer Sale!",
    "Be the First to Shop our VIP Pre-Sale!",
    "Explore our Latest Arrivals!",
  ];
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [words]);

  return <span id="words">{currentWord}</span>;
};
