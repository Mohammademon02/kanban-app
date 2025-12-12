import { useNavigate } from "react-router-dom"
import TopBar from "../components/common/Topbar"


function KanbanPage() {
    const navigate = useNavigate()


    const handleViewChange = (view) => {
        navigate(view === "kanban" ? "/kanban" : "/list")
    }

    return (
        <div className="flex flex-col h-screen">
            <TopBar
                onViewChange={handleViewChange}
                currentView="kanban"
            />
            kanban page
        </div>
    )
}

export default KanbanPage
