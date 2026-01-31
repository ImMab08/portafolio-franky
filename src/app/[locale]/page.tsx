'use client'

import { Header } from "@/components/layout/header";
import { HomeScreen } from "@/features/home_page/home_screen";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HomeScreen />
    </main>
  );
}
