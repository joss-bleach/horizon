"use client";
import Link from "next/link";
import Image from "next/image";

// Utils
import { cn } from "@/lib/utils";

// Constants
import { sidebarLinks } from "@/constants";

// Hooks
import { usePathname } from "next/navigation";

// Components
import { Menu } from "lucide-react";

interface MobileNavigationProps {
  user: User;
}

// Components
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const MobileNavigation = ({ user }: MobileNavigationProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="right" className="bg-white border-none">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="items-center gap-1 px-4">
              <Image
                src="/horizon-logo.svg"
                alt="Horizon logo"
                width={30}
                height={30}
              />
            </Link>
            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map(({ label, route, imgURL: ImageUrl }) => {
                    const isActive =
                      pathname === route || pathname.startsWith(`${route}/`);
                    return (
                      <SheetClose asChild key={label}>
                        <Link
                          className={cn("mobilenav-sheet_close w-full", {
                            "bg-[#AA5EFE]/80": isActive,
                          })}
                          href={route}
                        >
                          <ImageUrl
                            className={cn("text-black-2", {
                              "text-white": isActive,
                            })}
                            size={20}
                          />
                          <p
                            className={cn(
                              "text-16 font-semibold text-black-2",
                              {
                                "!text-white": isActive,
                              }
                            )}
                          >
                            {label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </SheetClose>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};
