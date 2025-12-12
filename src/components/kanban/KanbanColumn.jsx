import { PlusIcon } from "../Icons/icon-library"
import TaskCard from "./TaskCard"

function KanbanColumn({ title, color, tasks, onTaskClick }) {
  return (
    <div className="flex-shrink-0 w-72 lg:w-[342px]">
      {/* Column Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${color}`}></div>
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <span className="flex items-center justify-center w-5 h-5 text-xs font-medium text-gray-600 bg-gray-200 rounded-full">
            {tasks.length}
          </span>
        </div>
        <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
          <PlusIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Tasks Container */}
      <div className="flex flex-col gap-3 p-2 bg-gray-100 rounded-lg min-h-96">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onClick={() => onTaskClick(task)} />
        ))}
      </div>
    </div>
  )
}

export default KanbanColumn
