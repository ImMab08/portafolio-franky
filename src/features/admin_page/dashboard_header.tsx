export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
        <p className="text-sm text-gray-400">Gestiona tus proyectos y posts</p>
      </div>

      <button className="bg-tertiary/80 hover:bg-tertiary transition px-4 py-2 rounded-lg text-sm font-medium text-text-primary cursor-pointer">
        + Nuevo post
      </button>
    </header>
  );
}
