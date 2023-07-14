import React from "react";
import { Container } from "./container";

interface NavbarProps {
  children: React.ReactNode;
}
export const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <Container>
      <nav
        className="mx-auto flex  items-center justify-between py-1"
        aria-label="Global"
      >
        {children}
      </nav>
    </Container>
  );
};
