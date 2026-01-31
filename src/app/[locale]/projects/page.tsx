"use client";

import { ProjectsScreen } from "@/features/projects_page/projects_screen";
import { Header } from "@/components/layout/header";

export default function Home() {
  return (
    <main className="">
      <Header />      
			<ProjectsScreen />
    </main>
  );
}
