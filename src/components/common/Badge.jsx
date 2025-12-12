import { cn } from "../../lib/utils"

export function Badge({ label }) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize",
                {
                    "bg-red-500/20 text-red-400": label === "urgent",
                    "bg-yellow-500/20 text-yellow-400": label === "high",
                    "bg-green-500/20 text-green-400": label === "medium",
                    "bg-gray-100 text-gray-700": label === "low",
                }
            )}
        >
            {label}
        </span>
    )
}
