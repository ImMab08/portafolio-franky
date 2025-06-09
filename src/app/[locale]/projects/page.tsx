"use client";


import { ProjectsScreen } from "@/components/screens/projects_screen/projects_screen";
import { Header } from "@/components/shared/header";

export default function Home() {
  return (
    <main className="">
      <Header />      
			<ProjectsScreen />
    </main>
  );
}
