import Link from "next/link";
import { api } from "@/utils/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
    const hello = api.post.hello.useQuery({ text: "from tRPC" });

    return (
        <div className="flex flex-col">
            <div className="bg-base">
                sdf
            </div>
        </div>
    );
}