import Avatar from "../common/Avatar"
import { Badge } from "../common/Badge"
import { StatusBadge } from "../common/StatusBadge"
import { CalenderIcon, CommentIcon } from "../Icons/icon-library"

function TaskRow({ task, onClick }) {

  const formatDate = (dateStr) => {
    if (!dateStr) return ""
    const date = new Date(dateStr)
    const month = date.toLocaleDateString("en-US", { month: "short" })
    const day = date.getDate()
    return `${month} ${day}`
  }

  console.log("task", task)
  return (
    <div onClick={onClick} className="cursor-pointer hover:bg-gray-50 transition-colors">
      {/* Mobile View - Card Style */}
      <div className="lg:hidden p-4">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-medium text-gray-900 flex-1 pr-2">{task.title}</h4>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="6" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="18" r="1.5" />
            </svg>
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <StatusBadge label={task.status} />
          <Badge label={task.priority} />
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <CalenderIcon />
            {formatDate(task.dueDate)}
          </span>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Avatar name={task.assignee} size="sm" />
            <span className="text-sm text-gray-600">{task.assignee}</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <CommentIcon />
            {task.comments}
          </span>
        </div>
      </div>

      {/* Desktop View - Table Row */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-4 py-3 items-center">
        <div className="col-span-4">
          <h4 className="font-medium text-gray-900 truncate">{task.title}</h4>
        </div>
        <div className="col-span-2">
          <StatusBadge label={task.status} />
        </div>
        <div className="col-span-2 flex items-center gap-2">
          <Avatar name={task.assignee} size="sm" />
          <span className="text-sm text-gray-600 truncate">{task.assignee}</span>
        </div>
        <div className="col-span-1">
          <Badge
            label={task.priority} />
        </div>
        <div className="col-span-2 flex items-center gap-3 text-sm text-gray-600">
          <span>{formatDate(task.dueDate)}</span>
          <span className="flex items-center gap-1 text-gray-500">
            <CommentIcon />
            {task.comments}
          </span>
        </div>
        <div className="col-span-1 text-right">
          <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="6" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="18" r="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskRow
