import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="grid h-screen place-content-center bg-background px-4">
      <div className="text-center">
        <Image
          alt="page not found"
          src="/404-img.svg"
          height={500}
          width={500}
          sizes="500px"
          className="mx-auto   sm:h-64"
          priority={true}
          title="Page Not Found"
        />
        <h1 className="mt-6 text-2xl font-bold tracking-tight  sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">Page Not Found</p>
      </div>
    </div>
  );
}
