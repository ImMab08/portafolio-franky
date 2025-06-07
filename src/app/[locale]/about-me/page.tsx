'use client'

import { AboutScreen } from "@/components/screens/about_screen/about_screen";
import { Header } from "@/components/shared/header";

export default function Home() {
  return (
    <main className="">
      <Header />
			<AboutScreen />
    </main>
  );
}
