import { useNavigate } from "react-router-dom"
import TopBar from "../components/common/Topbar"


function ListViewPage() {
    const navigate = useNavigate()

    const handleViewChange = (view) => {
        navigate(view === "kanban" ? "/kanban" : "/list")
    }



    return (
        <div className="flex flex-col h-screen">
            <TopBar
                onViewChange={handleViewChange}
                currentView="list"
            />
            List view page
        </div>
    )
}

export default ListViewPage
