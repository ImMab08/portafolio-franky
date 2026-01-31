'use client'

import { AboutScreen } from "@/features/about_page/about_screen";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <main className="">
      <Header />
			<AboutScreen />
    </main>
  );
}
