'use client'

import { AboutScreen } from "@/components/pages/about_page/about_screen";
import { Header } from "@/components/shared/header";

export default function Home() {
  return (
    <main className="">
      <Header />
			<AboutScreen />
    </main>
  );
}
