
import { Filter } from "lucide-react";

function FilterBar({cuisines, selectedCuisine, onFilterChange}){
    return(
        <div className="d-flex align-items-center gap-2">
            <Filter className="text-muted"/>

            <select className="form-select form-select-sm"
            style={{width:"auto"}}
            value={selectedCuisine}
            onChange={(e)=>onFilterChange(e.target.value)}>
                <option value="">All Cuisines</option>
                {cuisines.map((c)=>(
                   <option key={c.id} value={c.name}>
                    {c.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default FilterBar;