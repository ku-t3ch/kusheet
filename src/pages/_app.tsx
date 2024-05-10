import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import LayoutTypeA from "@/layouts/LayoutTypeA";
import { ThemeProvider } from "@/utils/ThemeProvider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <main className={`font-sans ${inter.variable}`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <LayoutTypeA>
                        <Component {...pageProps} />
                    </LayoutTypeA>
                </ThemeProvider>
            </main>
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
