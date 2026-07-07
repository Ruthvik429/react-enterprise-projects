import { useState, useEffect } from "react";

function useLocalStorage(key, defaultValue){
const [value, setValue] = useState(()=>{
try{
   const savedValue = localStorage.getItem(key);
   return savedValue !== null ? JSON.parse(savedValue) : defaultValue;
    }catch(error){
     console.error(`Error reading the local storage key ${key}: `, error);
     return defaultValue
    }
})
    
useEffect(()=>{
    try{
        localStorage.setItem(key, JSON.stringify(value));

    }catch(error){
        console.error(`Error writing the local storage key ${key}: `, error);

    }
},[key, value])
return [value, setValue];

}

export default useLocalStorage;