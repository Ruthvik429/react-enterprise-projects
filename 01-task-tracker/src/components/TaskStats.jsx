function TaskStats({pendingCount, completedCount}){
    return(
        <div className="d-flex gap-4 mb-3 fs-6">
            <span>
                Pending: <strong>{pendingCount}</strong>
            </span>
            <span>
                Completed: <strong>{completedCount}</strong>
            </span>
        </div>
    )
}

export default TaskStats;