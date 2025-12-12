import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import KanbanPage from "./pages/KanbanPage"
import ListViewPage from "./pages/ListViewPage"

function App() {

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Navigate to="/kanban" replace />} />
          <Route path="/kanban" element={<KanbanPage />} />
          <Route path="/list" element={<ListViewPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
