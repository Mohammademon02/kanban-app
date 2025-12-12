import { useNavigate } from "react-router-dom"
import TopBar from "../components/common/Topbar"
import KanbanBoard from "../components/kanban/KanbanBoard"
import { mockTasks } from "../data/mockData"
import { useMemo, useState } from "react"
import Container from "../components/common/Container"
import TaskDrawer from "../components/drawer/TaskDrawer"


function KanbanPage() {
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
        <>
            <TopBar
                onViewChange={handleViewChange}
                currentView="kanban"
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />
            <Container className="py-4">
                <div className="flex-1 overflow-auto">
                    <KanbanBoard tasks={filteredTasks} onTaskClick={handleTaskClick} />
                </div>
                <TaskDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} task={selectedTask} />
            </Container>
        </>
    )
}

export default KanbanPage
