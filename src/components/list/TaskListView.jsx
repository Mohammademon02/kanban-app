import TaskRow from "./TaskRow"

function TaskListView({ tasks, onTaskClick }) {
  return (
    <div>
      {/* Desktop Table Header */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-4 py-3 bg-gray-100 rounded-t-lg text-xs font-semibold text-gray-600 uppercase tracking-wider">
        <div className="col-span-4">Task</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2">Assignee</div>
        <div className="col-span-1">Priority</div>
        <div className="col-span-2">Due Date</div>
        <div className="col-span-1 text-right">Actions</div>
      </div>

      {/* Task Rows */}
      <div className="bg-white rounded-lg lg:rounded-t-none shadow-sm border border-gray-200 divide-y divide-gray-200">
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} onClick={() => onTaskClick(task)} />
        ))}
      </div>
    </div>
  )
}

export default TaskListView
