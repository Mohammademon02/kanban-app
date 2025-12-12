import { cn } from "../../lib/utils"

export function Badge({ label }) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize",
                {
                    "bg-red-100 text-red-700": label === "urgent",
                    "bg-yellow-100 text-yellow-700": label === "high",
                    "bg-green-100 text-green-700": label === "medium",
                    "bg-gray-100 text-gray-700": label === "low",
                }
            )}
        >
            {label}
        </span>
    )
}
