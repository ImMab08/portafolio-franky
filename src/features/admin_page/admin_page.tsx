import { DashboardHeader } from "./dashboard_header";
import { StatsCards } from "./stats_cards";
import { PostsTable } from "./posts_table";

export default function AdminPage() {
  return (
    <section className="flex-1 h-full p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col space-y-4">
        <DashboardHeader />
        <StatsCards />

        <div className="flex-1 overflow-hidden">
          <PostsTable />
        </div>
      </div>
    </section>
  );
}

