import { Intro } from "@/widgets/intro";
import { Navigation } from "@/widgets/navigation";
import React from "react";

export const Header = () => {
  return (
    <>
      <header>
        <Navigation />
        <Intro />
      </header>
    </>
  );
};
