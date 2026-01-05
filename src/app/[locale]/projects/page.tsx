"use client";


import { ProjectsScreen } from "@/components/pages/projects_page/projects_screen";
import { Header } from "@/components/shared/header";

export default function Home() {
  return (
    <main className="">
      <Header />      
			<ProjectsScreen />
    </main>
  );
}
