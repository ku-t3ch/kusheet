import Link from "next/link"
import {
    Menu,
    MoonIcon,
    SunIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { useRouter } from "next/router"
import { cn } from "@/lib/utils"
import Logo from "@/components/Logo"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const menus = [
    {
        icon: null,
        label: "หน้าหลัก",
        href: "/"
    },
    {
        icon: null,
        label: "ซื้อชีท",
        href: "/buy"
    },
    {
        icon: null,
        label: "ขายชีท",
        href: "/sell"
    }
]

interface Props {
    children: React.ReactNode;
}

export default function LayoutTypeA(props: Props) {
    const { setTheme, theme } = useTheme()
    const { pathname } = useRouter()
    const isCurrentPath = (href: string) => pathname === href

    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-40">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Logo />
                    </Link>

                </nav>
                <div className=" hidden md:flex font-medium  items-center">
                    {menus.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className={cn("transition-colors hover:text-foreground", isCurrentPath(item.href) ? "text-foreground" : "text-muted-foreground")}
                        >
                            <Button variant="ghost" >
                                {item.label}
                            </Button>
                        </Link>
                    ))}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" >
                                {theme === "light" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
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
                        <Button
                            variant="ghost"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-3 text-lg font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold mb-5"
                            >
                                <Logo />
                            </Link>
                            {menus.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={cn("rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground", isCurrentPath(item.href) ? "bg-muted" : "")}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 md:px-40">
                {props.children}
            </main>
        </div>
    )
}
