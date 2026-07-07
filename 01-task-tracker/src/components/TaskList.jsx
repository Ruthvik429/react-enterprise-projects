import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleTask, onDeleteTask}){
    if(tasks.length ===0){
        return (
            <div className="text-center text-muted py-5">
                <p className="fs-4 mb-1">No Tasks found</p>
                <p className="fs-6">Try adding a task or adjusting your filters.</p>
            </div>
        );
    }
    return(
        <ul className="list-group">
            {
                tasks.map((task)=>(
                    <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggleTask}
                    onDelete={onDeleteTask}
                />
                ))
            }
        </ul>
    );
}
export default TaskList;