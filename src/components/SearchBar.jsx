// import React, {useState} from "react";
// import {FaSearch} from "react-icons/fa";
// import "./SearchBar.css";
// import index from './employees';

// function SearchBar () {

//     const [input,setInput] = useState("");

//     const fetchData = (value) => {
//         fetch("https://raw.githubusercontent.com/dixitsoham7/dixitsoham7.github.io/main/index.json")
//         .then((response)=>response.json())
//         .then(json=>{
//             // console.log(json);
//             const results = json.filter((index)=>{
//                 return value && index && index.name && index.name.toLowerCase().includes(value);
//             });
//             console.log(results);
//         });
//     };

//     const handleChange = (value)=>{
//         setInput(value);
//         fetchData(value);
//     }

//     return(
//         <div className="input-wrapper">
//             <FaSearch id="search-icon" />
//             <input placeholder="Type to search" value={input} onChange={(e)=> handleChange(e.target.value)} />
//         </div>
//     )
// }

// export default SearchBar;


import { useState } from "react";
import {employees} from './employees';
import './SearchBar.css';

function SearchBar(){
    const [query,setQuery] =  useState("");
    // console.log(employees.filter(employees=>employees.name.toLowercase().includes("fe")));
    return(
        <div className="app">
            <input type="text" placeholder="Type to search... " className="search" onChange={e=>setQuery(e.target.value)}/>
            <ul className="list">
                {employees.filter(employees=>employees.name.toLowerCase().includes(query)).map((employees)=>(
                    <li key = {employees.id} className="listItem">{employees.name}</li>
                ))}
            </ul>

        </div>
    )
}

export default SearchBar;