
function TaskItem({task, onToggle, onDelete}){
 const priorityColors={
    Low:'success',
    Medium: 'warning',
    High: 'danger',
 };

 const badgeColor = priorityColors[task.priority] || 'secondary';

 return(
    <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
            <input type="checkbox" 
            className="form-check-input"
            checked={task.completed}
            onChange={()=> onToggle(task.id)} />
            <span className={task.completed? 'text-decoratio-line-through text-muted':''}>
                {task.title}
            </span>
            <span className="badge bg-secondary">{task.category}</span>
            <span className={`badge bg-${badgeColor}`}>{task.priority}</span>
        </div>
        <button className="btn btn-sm btn-outline-danger" 
        onClick={()=> onDelete(task.id)}>
            🗑
        </button>
    </li>
 )
}

export default TaskItem