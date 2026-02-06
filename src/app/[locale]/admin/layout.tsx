import { redirect } from "@/i18n/navigation";
import { createSupabaseServer } from "@/lib/supabase/server";

import { SideMenuAdmin } from "@/components/layout/side_menu_admin";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const supabase = await createSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect({
      href: "/auth",
      locale: locale,
    });
  }

  return (
    <main>
      <div className="flex h-screen overflow-hidden">
        <SideMenuAdmin />

        {children}
      </div>
    </main>
  );
}
