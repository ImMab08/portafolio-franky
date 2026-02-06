import { createSupabaseServer } from "@/lib/supabase/server";
import { redirect } from "@/i18n/navigation";

export default async function AdminPage({
  params,
}: {
  params: { locale: string };
}) {
  const supabase = await createSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect({
      href: "/login",
      locale: params.locale
    });
  }

  return <div>hola mundo</div>;
}
