import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { ThemeProvider } from "@/utils/ThemeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useRouter } from "next/router";
import LayoutTypeB from "@/layouts/LayoutTypeB";
import LayoutTypeA from "@/layouts/LayoutTypeA";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    const {pathname} = useRouter()

    const pathLayout = [
        {
            path: "/",
            layout: LayoutTypeA
        },
        {
            path: "/buy",
            layout: LayoutTypeA
        },
        {
            path: "/buy",
            layout: LayoutTypeA
        },
        {
            path: "/app",
            layout: LayoutTypeB
        },
        {
            path: "/app/buy",
            layout: LayoutTypeB
        },
        {
            path: "/app/sell",
            layout: LayoutTypeB
        },
    ]

    const renderLayout = (children: React.ReactNode) => {
        const Layout = pathLayout.find((item) => item.path === pathname)?.layout ?? null
        if (!Layout) return children
        return <Layout>{children}</Layout>
    }
    

    return (
        <SessionProvider session={session}>
            <main className={`font-sans ${inter.variable}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        {renderLayout(<Component {...pageProps} />)}
                    </TooltipProvider>
                </ThemeProvider>
            </main>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
