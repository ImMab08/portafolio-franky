import { Header } from "@/components/layout/header";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <nav className="w-full absolute top-0">
        <Header></Header>
      </nav>
      <div className="flex items-center justify-center">
        <Image
          src="/img/not_found_image.png"
          alt="404 Not Found"
          width={500}
          height={500}
          className="object-contain w-80 h-80 md:w-125 md:h-125"
          priority
        />
      </div>
    </div>
  );
}
