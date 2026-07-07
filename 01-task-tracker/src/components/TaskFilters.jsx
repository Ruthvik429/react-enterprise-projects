

function TaskFilters({filterCategory,
    setFilterCategory,
    filterStatus,
    setFilterStatus
}){
    return(
        <div className="row g-2 mb-3">
            <div className="col-6 col-md-3">
                <select value={filterCategory} className="formselect"
                onChange={(event)=> setFilterCategory(event.target.value)}>
                    <option value="All">All</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Urgent">Urgent</option>
                </select>
            </div>
            <div className="col-6 col-md-3">
                <select value={filterStatus} className="form-select"
                onChange={(event)=>setFilterStatus(event.target.value)}>
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
        </div>
    )
}

export default TaskFilters;