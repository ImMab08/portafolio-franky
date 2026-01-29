'use client'

import { Header } from "@/components/shared/header";
import { HomeScreen } from "@/components/pages/home_page/home_screen";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HomeScreen />
    </main>
  );
}
