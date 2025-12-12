import Avatar from "../common/Avatar"
import { Badge } from "../common/Badge"
// import PriorityBadge from "../common/PriorityBadge"
import { AttachmentIcon, CalenderIcon, CommentIcon } from "../Icons/icon-library"


function TaskCard({ task, onClick }) {

  console.log("task",task)

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 cursor-pointer hover:shadow-md hover:border-gray-300 transition-all group"
    >
      {/* Drag Handle */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="9" cy="6" r="1.5" />
            <circle cx="15" cy="6" r="1.5" />
            <circle cx="9" cy="12" r="1.5" />
            <circle cx="15" cy="12" r="1.5" />
            <circle cx="9" cy="18" r="1.5" />
            <circle cx="15" cy="18" r="1.5" />
          </svg>
        </div>

        <Badge
          label={task.priority} />
      </div>

      {/* Title */}
      <h4 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{task.title}</h4>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-3 text-gray-500">
          {/* Due Date */}
          <span className="flex items-center gap-1 text-xs">
            <CalenderIcon />
            {task.dueDate}
          </span>

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
  )
}

export default TaskCard
