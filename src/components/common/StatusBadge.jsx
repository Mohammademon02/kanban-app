function StatusBadge({ status }) {
  const styles = {
    backlog: "bg-gray-100 text-gray-700",
    "in-progress": "bg-blue-100 text-blue-700",
    review: "bg-yellow-100 text-yellow-700",
    done: "bg-green-100 text-green-700",
  }

  const labels = {
    backlog: "Backlog",
    "in-progress": "In Progress",
    review: "Review",
    done: "Done",
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

export default StatusBadge
