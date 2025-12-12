import { BoardIcon, ListIcon, SearchIcon, CloseIcon, FilterIcon, PlusIcon } from '../Icons/icon-library';
import Container from './Container';

function TopBar({ onViewChange, currentView, searchQuery, onSearchChange, onNewTaskClick }) {
    return (
        <header className="bg-white border-b border-gray-200">
            <Container className="py-2 sm:py-3">
                <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left Section */}
                    <div className="flex items-center justify-between gap-3">
                        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 whitespace-nowrap">Task Board</h1>
                        <select className="px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-0">
                            <option disabled>Select Project</option>
                            <option>Project Alpha</option>
                            <option>Project Beta</option>
                            <option>Project Gamma</option>
                        </select>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-2">
                        {/* View Toggle */}
                        <div className="flex items-center bg-gray-100 rounded-md p-0.5 sm:p-1">
                            <button
                                onClick={() => onViewChange("kanban")}
                                className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors ${currentView === "kanban" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                <span className="flex items-center justify-center gap-1">
                                    <BoardIcon className="w-4 h-4" />
                                    <span className="hidden md:inline">Board</span>
                                </span>
                            </button>
                            <button
                                onClick={() => onViewChange("list")}
                                className={`px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium rounded transition-colors ${currentView === "list" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                <span className="flex items-center justify-center gap-1">
                                    <ListIcon className="w-4 h-4" />
                                    <span className="hidden md:inline">List</span>
                                </span>
                            </button>
                        </div>

                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-[140px] sm:max-w-none sm:flex-none">
                            <SearchIcon className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                className="w-full pl-7 sm:pl-9 pr-7 sm:pr-8 py-1.5 text-xs sm:text-sm border border-gray-300 rounded-md sm:w-48 lg:w-56 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />

                            {searchQuery && (
                                <button
                                    onClick={() => onSearchChange("")}
                                    className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 p-0.5 sm:p-1 text-gray-400 hover:text-gray-600"
                                >
                                    <CloseIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                </button>
                            )}
                        </div>

                        {/* Filter Button */}
                        <button className="flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                            <FilterIcon className="w-4 h-4" />
                            <span className="hidden lg:inline">Filter</span>
                        </button>

                        {/* New Task Button */}
                        <button
                            onClick={onNewTaskClick}
                            className="flex items-center justify-center gap-1 px-2.5 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
                        >
                            <PlusIcon className="w-4 h-4" />
                            <span className="hidden sm:inline">New</span>
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default TopBar
