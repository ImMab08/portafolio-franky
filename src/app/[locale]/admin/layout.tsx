import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "@/i18n/navigation";

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

  return <main>{children}</main>;
}
