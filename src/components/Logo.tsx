import { PackageIcon } from "lucide-react";

interface Props { }

export default function Logo(props: Props) {
    return (
        <div className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <PackageIcon />
            <div>KUSheet</div>
        </div>
    )
}