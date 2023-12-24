"use client";
import { Navbar } from "@/app/_components/shared/navbar";
import { AnnouncementSection } from "./annoucement-section";
import { LanguageSection } from "./language-section";
import { SocialSection } from "./social-section";

export const SocialNavbar = () => {
  return (
    <Navbar>
      <div>
        <SocialSection />
      </div>
      <div className=" ">
        <AnnouncementSection />
      </div>
      <div className=" ">
        <LanguageSection />
      </div>
    </Navbar>
  );
};
