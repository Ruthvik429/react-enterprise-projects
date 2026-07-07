import { useState } from "react";

function TaskForm({ onAddTask }){
  const [title, setTilte] = useState('');
  const [category, setCategory] = useState('Work');
  const[priority,setPriority] = useState('Medium');

  function handleSubmit(event){
    event.preventDefault();

    const trimmedTitle = title.trim();
    if(trimmedTitle === ''){
        return;
    };

    onAddTask({
        title:trimmedTitle,
        category,
        priority
    });

    setTilte('');
    setCategory('Work');
    setPriority('Medium');

  };

  return(
    <form onSubmit={handleSubmit} className="row g-2 mb-3 align-items-center">

      <div className="col-2 col-md-5">
        <input type="text" className="form-control" placeholder="Entertask title"
        value={title} onChange={(event)=>setTilte(event.target.value)} />
        </div>  
        <div className="col-6 col-md-3">
            <select value={category} className="form-select"
            onChange={(event)=>setCategory(event.target.value)}>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Urgent">Urgent</option>
            </select>
        </div>
        <div className="col-6 col-md-2">
            <select value={priority} className="form-select"
            onChange={(event)=>setPriority(event.target.value)}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
        </div>

        <div className="col-12 col-md-2">
            <button className="btn btn-primary w-100" type="submit">
                +Add
            </button>
        </div>
    </form>
  )


}
export default TaskForm;