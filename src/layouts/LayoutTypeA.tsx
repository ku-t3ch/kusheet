import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { MenuIcon, MoonIcon, PackageIcon, SearchIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
}

const menus: { name: string; href: string }[] = [
    {
        name: "Home",
        href: "/"
    }
]

export default function LayoutTypeA(props: Props) {
    const { setTheme } = useTheme()
    const { pathname } = useRouter()

    const isCurrentPath = (href: string) => pathname === href

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                   <Logo />
                    {menus.map((menu) => (
                        <Link
                            key={menu.name}
                            className={clsx("transition-colors hover:text-foreground", isCurrentPath(menu.href) ? "text-foreground" : "text-muted-foreground")}
                            href={menu.href}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="shrink-0 md:hidden" size="icon" variant="outline">
                            <MenuIcon />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                        <Logo />
                            {menus.map((menu) => (
                                <Link
                                    key={menu.name}
                                    className={clsx(isCurrentPath(menu.href) ? "hover:text-foreground" : "text-muted-foreground hover:text-foreground")}
                                    href={menu.href}
                                >
                                    {menu.name}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        {/* <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                                placeholder="Search products..."
                                type="search"
                            />
                        </div> */}
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                                <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="rounded-full" size="icon" variant="secondary">
                                {/* <UserCircleIcon className="h-5 w-5" /> */}
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                {props.children}
            </main>
        </div>
    )
}