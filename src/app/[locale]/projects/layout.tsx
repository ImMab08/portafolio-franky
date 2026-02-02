'use client'
import { useState } from "react";

import { HeaderProjects } from "@/components/layout/header_projects";
import SideMenu from "@/components/layout/side_menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="w-screen h-screen overflow-hidden">
      <div className="flex  h-full">
        <SideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Contenido */}
        <div className="flex flex-col flex-1 min-h-0">
          <HeaderProjects onMenuClick={() => setMenuOpen((prev) => !prev)} />
          <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
        </div>
      </div>
    </main>
  );
}
