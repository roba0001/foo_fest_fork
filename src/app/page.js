"use client";
import Hero from "../app/components/Hero.jsx";

import Navigation from "../app/components/Navigation.jsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../app/components/Button.jsx";

export default function Home() {
  return <Hero />;
}
