import { BoardIcon, ListIcon, SearchIcon, CloseIcon, FilterIcon, PlusIcon } from '../Icons/icon-library';

function TopBar({onViewChange, currentView}) {
    return (
        <header className="bg-white border-b border-gray-200 px-4 py-3 lg:px-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                {/* Left Section */}
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-semibold text-gray-900">Task Board</h1>
                    <select className="px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option disabled>Select Project</option>
                        <option>Project Alpha</option>
                        <option>Project Beta</option>
                        <option>Project Gamma</option>
                    </select>
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap items-center gap-2 lg:gap-3">
                    {/* View Toggle */}
                    <div className="flex items-center bg-gray-100 rounded-md p-1">
                        <button
                            onClick={() => onViewChange("kanban")}
                            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${currentView === "kanban" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            <span className="flex items-center gap-1.5">
                                <BoardIcon />
                                Board
                            </span>
                        </button>
                        <button
                            onClick={() => onViewChange("list")}
                            className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${currentView === "list" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            <span className="flex items-center gap-1.5">
                                <ListIcon />
                                List
                            </span>
                        </button>
                    </div>

                    <div className="relative">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            className="pl-9 pr-8 py-1.5 text-sm border border-gray-300 rounded-md w-48 lg:w-56 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* Filter Button */}
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                        <FilterIcon />
                        Filter
                    </button>

                    {/* New Task Button */}
                    <button className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
                        <PlusIcon />
                        New Task
                    </button>
                </div>
            </div>
        </header>
    )
}

export default TopBar
