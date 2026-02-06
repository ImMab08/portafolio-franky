const stats = [
  { label: "Total posts", value: 12 },
  { label: "Activos", value: 8 },
  { label: "Borradores", value: 3 },
  { label: "Inactivos", value: 1 },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-[#161616] border border-[#222] rounded-xl p-4"
        >
          <p className="text-sm text-gray-400">{stat.label}</p>
          <p className="text-2xl font-semibold text-white mt-1">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
