import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "@/i18n/navigation";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const supabase = await createSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect({
      href: "/auth",
      locale: params.locale,
    });
  }

  return <main>{children}</main>;
}
