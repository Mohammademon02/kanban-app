import { cn } from "../../lib/utils"

export function StatusBadge({ label }) {

    return (
        <span
            className={cn(
                "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize",
                {
                    "bg-blue-100 text-blue-700": label === "in-progress",
                    "bg-green-100 text-green-700": label === "done",
                    "bg-yellow-100 text-yellow-700": label === "review",
                    "bg-gray-100 text-gray-700": label === "backlog",
                }
            )}
        >
            {label}
        </span>
    )
}
