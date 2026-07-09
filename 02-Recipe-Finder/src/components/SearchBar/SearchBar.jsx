import { useState, useRef } from "react";
import {Search, X} from "lucide-react";
import "./SearchBar.css";

function SearchBar({ onSearch }){
    const [inputValue, setInputValue] = useState("");
    const debounceTimer = useRef(null);

    const handleChange = (e) =>{
        const value = e.target.value;
        setInputValue(value);

        if(debounceTimer.current){
            clearTimeout(debounceTimer.current);
        }

        debounceTimer.current = setTimeout(()=>{
            onSearch(value);
        },400);
    };

    const handleCLear=()=>{
        setInputValue("");
        onSearch("");
        if(debounceTimer.current) clearTimeout(debounceTimer.current);
    };

    return(
        <div className="search-bar">
            <Search size={18} className="search-icon"/>
            <input type="text" 
            placeholder="Search recipes by name..."
            value={inputValue}
            className="search-input" 
            onChange={handleChange}/>

            {inputValue && (
                <button onClick={handleCLear} aria-label="Clear search" className="search-clear-btn">
                    <X size={16}/>
                </button>
            )}

        </div>
    );
}
export default SearchBar;