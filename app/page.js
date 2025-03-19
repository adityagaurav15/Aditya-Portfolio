"use client";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import Header from "./component/Header";
import About from "./component/About";
import { useEffect, useState } from "react";
import ContactMe from "./component/ContactMe";
import Skills from "./component/Skills";
import MagicNav from "./component/Navbar2";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {});
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* <MagicNav /> */}
      <Header />
      <About />
      <Skills />
      <ContactMe />
    </>
  );
}
