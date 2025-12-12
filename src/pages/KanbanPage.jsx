import { useNavigate } from "react-router-dom"
import TopBar from "../components/common/Topbar"
import KanbanBoard from "../components/kanban/KanbanBoard"
import { mockTasks } from "../data/mockData"
import { useMemo, useState } from "react"
import Container from "../components/common/Container"


function KanbanPage() {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")


    const handleViewChange = (view) => {
        navigate(view === "kanban" ? "/kanban" : "/list")
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

    console.log("filteredTasks", filteredTasks)

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
                    <KanbanBoard tasks={filteredTasks} />
                </div>
                {/* <TaskDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} task={selectedTask || mockTasks[0]} /> */}
            </Container>
        </>
    )
}

export default KanbanPage
