import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import TopBar from "../components/common/Topbar"
import TaskDrawer from "../components/drawer/TaskDrawer"
import { mockTasks } from "../data/mockData"
import TaskListView from "../components/list/TaskListView"
import Container from "../components/common/Container"



function ListViewPage() {
  const navigate = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const handleViewChange = (view) => {
    navigate(view === "kanban" ? "/kanban" : "/list")
  }

  const handleTaskClick = (task) => {
    setSelectedTask(task)
    setDrawerOpen(true)
  }

  const filteredTasks = useMemo(() => {
    if (!searchQuery.trim()) return mockTasks
    const query = searchQuery.toLowerCase()
    return mockTasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query) ||
        task.assignee.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query),
    )
  }, [searchQuery])

  return (
    <div className="h-screen">
      <TopBar
        onViewChange={handleViewChange}
        currentView="list"
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNewTaskClick={() => {
          setSelectedTask(null)
          setDrawerOpen(true)
        }}

      />
      <Container className="py-4">
        <div className="flex-1 overflow-auto">
          <TaskListView tasks={filteredTasks} onTaskClick={handleTaskClick} />
        </div>
        <TaskDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} task={selectedTask} />
      </Container>
    </div>
  )
}

export default ListViewPage
