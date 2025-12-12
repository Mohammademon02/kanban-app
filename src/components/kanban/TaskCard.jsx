

function TaskCard({ task, onClick }) {
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
        {/* <PriorityBadge priority={task.priority} /> */}
      </div>

      {/* Title */}
      <h4 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{task.title}</h4>

      {/* Footer */}
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <div className="flex items-center gap-3 text-gray-500">
          {/* Due Date */}
          <span className="flex items-center gap-1 text-xs">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {task.dueDate}
          </span>

          {/* Comments */}
          <span className="flex items-center gap-1 text-xs">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            {task.comments}
          </span>

          {/* Attachments */}
          {task.attachments > 0 && (
            <span className="flex items-center gap-1 text-xs">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                />
              </svg>
              {task.attachments}
            </span>
          )}
        </div>

        {/* Assignee Avatar */}
        {/* <Avatar name={task.assignee} size="sm" /> */}
      </div>
    </div>
  )
}

export default TaskCard
