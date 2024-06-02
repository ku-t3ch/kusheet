import Logo from "@/components/molecules/logo/Logo";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

const menus = [
  {
    icon: null,
    label: "หน้าหลัก",
    href: "/",
  },
  {
    icon: null,
    label: "ซื้อชีท",
    href: "/buy",
  },
  {
    icon: null,
    label: "ขายชีท",
    href: "/sell",
  },
];

export default function HeaderTypeA() {
  const { setTheme, theme } = useTheme();
  const { pathname } = useRouter();
  const isCurrentPath = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-40">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Logo />
        </Link>
      </nav>
      <div className=" hidden items-center font-medium  md:flex">
        {menus.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground",
              isCurrentPath(item.href)
                ? "text-foreground"
                : "text-muted-foreground",
            )}
          >
            <Button variant="ghost">{item.label}</Button>
          </Link>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              {theme === "light" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-3 text-lg font-medium">
            <Link
              href="#"
              className="mb-5 flex items-center gap-2 text-lg font-semibold"
            >
              <Logo />
            </Link>
            {menus.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground",
                  isCurrentPath(item.href) ? "bg-muted" : "",
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
