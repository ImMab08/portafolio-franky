'use client'

// import HeroScreen from "@/components/screens/hero_screen/hero_screen";
import { HomeScreen } from "@/components/screens/home_screen/home_screen";
import { Header } from "@/components/shared/header";


export default function Home() {
  return (
    <main className="">
      <Header />
      <HomeScreen />
    </main>
  );
}
