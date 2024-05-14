"use client";

import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  user: User;
}

// Hooks
import { usePathname } from "next/navigation";

// Constants
import { sidebarLinks } from "@/constants";

// Utils
import { cn } from "@/lib/utils";

export const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 items-center gap-2">
          <Image
            src="/horizon-logo.svg"
            alt="Horizon logo"
            className="size-18 max-xl:size-10"
            width={30}
            height={30}
          />
        </Link>
        {sidebarLinks.map(({ label, route, imgURL: ImageUrl }) => {
          const isActive =
            pathname === route || pathname.startsWith(`${route}/`);
          return (
            <Link
              className={cn("sidebar-link", { "bg-[#AA5EFE]/80": isActive })}
              href={route}
              key={label}
            >
              <div className="relative size-6">
                <ImageUrl
                  className={cn("text-black-2", { "text-white": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};
