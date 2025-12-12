import Avatar from "../common/Avatar"
import { Badge } from "../common/Badge"
import { AttachmentIcon, CalenderIcon, CommentIcon } from "../Icons/icon-library"


function TaskCard({ task, onClick }) {

  const formatDate = (dateStr) => {
    if (!dateStr) return ""
    const date = new Date(dateStr)
    const month = date.toLocaleDateString("en-US", { month: "short" })
    const day = date.getDate()
    return `${month} ${day}`
  }

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 cursor-pointer hover:shadow-md hover:border-gray-300 transition-all group"
    >
      <div className="flex items-start gap-1">
        {/* Drag Handle */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">  
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="9" cy="6" r="1.5" />
            <circle cx="15" cy="6" r="1.5" />
            <circle cx="9" cy="12" r="1.5" />
            <circle cx="15" cy="12" r="1.5" />
            <circle cx="9" cy="18" r="1.5" />
            <circle cx="15" cy="18" r="1.5" />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          {/* Title */}
          <h4 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{task.title}</h4>

          <div className="flex items-center gap-2 flex-wrap">
            <Badge label={task.priority} />
            {/* Due Date */}
            <div className="flex items-center gap-1 text-xs">
              <CalenderIcon />
              {formatDate(task.dueDate)}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-3 text-gray-500">


              {/* Comments */}
              <span className="flex items-center gap-1 text-xs">
                <CommentIcon />
                {task.comments}
              </span>

              {/* Attachments */}
              {task.attachments > 0 && (
                <span className="flex items-center gap-1 text-xs">
                  <AttachmentIcon />
                  {task.attachments}
                </span>
              )}
            </div>

            {/* Assignee Avatar */}
            <Avatar name={task.assignee} size="sm" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
