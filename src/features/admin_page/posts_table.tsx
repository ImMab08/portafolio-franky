import { IconDelete, IconPencil, IconVisibility } from "@/shared/icons";

type PostStatus = "Activo" | "Borrador" | "Inactivo";
type PostType = "Proyecto" | "Blog";

export interface Post {
  id: number;
  title: string;
  status: PostStatus;
  type: PostType;
  date: string;
}

const posts: Post[] = [

];

export function PostsTable() {
  return (
    <div className="bg-[#161616] border border-[#222] rounded-xl h-full flex flex-col">
      <table className="w-full text-sm table-fixed">
        {/* HEADER */}
        <thead className="bg-[#111] text-gray-400">
          <tr>
            <th className="text-left px-4 py-3 w-[35%]">Título</th>
            <th className="text-left px-4 py-3 w-[15%]">Estado</th>
            <th className="text-left px-4 py-3 w-[15%]">Tipo</th>
            <th className="text-left px-4 py-3 w-[15%]">Fecha</th>
            <th className="px-4 py-3 text-right w-[20%]">Acciones</th>
          </tr>
        </thead>
      </table>

      {/* BODY SCROLL */}
      <div className="flex-1 overflow-y-auto table-scroll">
        <table className="w-full h-full text-sm table-fixed">
          <tbody className="h-full">
            {posts.length === 0 ? (
              <tr className="flex-1 border-t border-[#222] table size-full">
                <td colSpan={5} className="text-center py-16 text-gray-500">
                  No hay proyectos aún
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-[#222] hover:bg-[#1b1b1b] table w-full"
                >
                  <td className="px-4 py-3 w-[35%] text-white truncate">
                    {post.title}
                  </td>

                  <td className="px-4 py-3 w-[15%]">
                    <span className="px-2 py-1 rounded-md text-xs bg-green-500/20 text-green-400">
                      {post.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 w-[15%] text-gray-300">
                    {post.type}
                  </td>

                  <td className="px-4 py-3 w-[15%] text-gray-400">
                    {post.date}
                  </td>

                  <td className="px-4 py-3 w-[20%]">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-lg bg-[#222] hover:bg-[#2a2a2a]">
                        <IconPencil />
                      </button>
                      <button className="p-2 rounded-lg bg-[#222] hover:bg-[#2a2a2a]">
                        <IconVisibility />
                      </button>
                      <button className="p-2 rounded-lg bg-red-500/20 hover:bg-red-600/30">
                        <IconDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
