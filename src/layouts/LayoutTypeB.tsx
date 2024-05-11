import Logo from "@/components/Logo";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { BellIcon, CircleUserIcon, HomeIcon, LineChartIcon, MenuIcon, MoonIcon, Package2Icon, PackageIcon, Search, SearchIcon, ShoppingCartIcon, SunIcon, UsersIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    children: React.ReactNode;
}

const menus = [
    {
        icon: null,
        label: "หน้าหลัก",
        href: "/app"
    },
    {
        icon: null,
        label: "ซื้อชีท",
        href: "/app/buy"
    },
    {
        icon: null,
        label: "ขายชีท",
        href: "/app/sell"
    }
]

export default function LayoutTypeB(props: Props) {
    const { setTheme, theme } = useTheme()
    const { pathname } = useRouter()

    const isCurrentPath = (href: string) => pathname === href

    return (
        <> <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <div className="flex h-full max-h-screen flex-col gap-2 sticky top-0">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <Package2Icon className="h-6 w-6" />
                            <span className="">KUSheet</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                            {menus.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary", isCurrentPath(item.href) ? "bg-muted" : "")}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            ))}

                        </nav>
                    </div>
                    {/* <div className="mt-auto p-4">
                        <Card x-chunk="dashboard-02-chunk-0">
                            <CardHeader className="p-2 pt-0 md:p-4">
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>
                                    Unlock all features and get unlimited access to our support
                                    team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div> */}
                </div>
            </div>
            <div className="flex flex-col">
                <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 backdrop-blur">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <MenuIcon className="h-5 w-5" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid gap-2 text-lg font-medium">

                                <Link
                                    href="#"
                                    className="flex items-center gap-2 text-lg font-semibold"
                                >
                                    <Package2Icon className="h-6 w-6" />
                                    <span className="sr-only">Acme Inc</span>
                                </Link>
                                {menus.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className={cn("mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground", isCurrentPath(item.href) ? "bg-muted" : "")}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                ))}

                                {/* <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                                >
                                    <ShoppingCartIcon className="h-5 w-5" />
                                    Orders
                                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        6
                                    </Badge>
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <PackageIcon className="h-5 w-5" />
                                    Products
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <UsersIcon className="h-5 w-5" />
                                    Customers
                                </Link>
                                <Link
                                    href="#"
                                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                >
                                    <LineChartIcon className="h-5 w-5" />
                                    Analytics
                                </Link> */}
                            </nav>
                            {/* <div className="mt-auto">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Upgrade to Pro</CardTitle>
                                        <CardDescription>
                                            Unlock all features and get unlimited access to our
                                            support team.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Button size="sm" className="w-full">
                                            Upgrade
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div> */}
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">
                        <form>
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                />
                            </div>
                        </form>
                    </div>
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <CircleUserIcon className="h-5 w-5" />
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
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {props.children}
                </main>
            </div>
        </div>
        </>
    )
}