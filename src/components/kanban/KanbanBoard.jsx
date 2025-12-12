import KanbanColumn from "./KanbanColumn"

const columns = [
  { id: "backlog", title: "Backlog", color: "bg-gray-500" },
  { id: "in-progress", title: "In Progress", color: "bg-blue-500" },
  { id: "review", title: "Review", color: "bg-yellow-500" },
  { id: "done", title: "Done", color: "bg-green-500" },
]

function KanbanBoard({ tasks, onTaskClick }) {

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status)
  }

  return (
    <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-4 min-h-[calc(100vh-140px)]">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          title={column.title}
          color={column.color}
          tasks={getTasksByStatus(column.id)}
          onTaskClick={onTaskClick}
        />
      ))}
    </div>
  )
}

export default KanbanBoard
