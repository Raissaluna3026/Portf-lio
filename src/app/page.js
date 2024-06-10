import React from "react";
import "../app/globals.css"; 
import Header from "../components/header/Header";
import Homme from "@//home/Homme";
import About from "@//about/About";
import Skills from "@//skills/Skills";


export default function Home() {
  return (
  <>
    <Header/>
    <main className="main">
      <Homme/>
      <About />
      <Skills/>
    </main>
    
  </>
  )
}
