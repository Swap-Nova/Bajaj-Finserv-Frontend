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


import { useState } from "react"; // import library
import {employees} from '../assets/employees';
import './SearchBar.css';
import {FaSearch} from "react-icons/fa";

// function SearchBar(){
//     const [query,setQuery] =  useState("");
//     console.log(employees.filter(employees=>employees.name.toLowercase().includes("fe")));
//     return(
//         <div className="app">
//             <input type="text" placeholder="Type to search... " className="search" onChange={e=>setQuery(e.target.value)}/>
//             <ul className="list">
//                 {employees.filter((employees)=>employees.name.toLowerCase().includes(query)).map((employees)=>(
//                     <li key = {employees.id} className="listItem">{employees.name}</li>
//                 ))}
//             </ul>

//         </div>
//     )
// }

function SearchBar(){

    const [query,setQuery] = useState("");
    // console.log(employees.filter(employees=>employees.name.includes("f")));
    // console.log(query);
    // console.log(employees.filter(user=>user.name.includes("f")));

    console.log(query);
    return(
        <div className="app">
            
            <input 
                type="text" 
                placeholder="Type to search..." 
                className="search" 
                onChange={(e) => setQuery(e.target.value)}
            />

            <FaSearch id="search-icon" />
            {/* <ul className="list">
                {employees.filter((employees)=>
                employees.name.toLowerCase().includes(query)
                ).map((employees)=>(
                    <li key={employees.id} className="listItem">
                        {employees.name}
                    </li>
                ))}
            </ul> */}
            <ul className="list">
                {employees.map((user)=>
                (
                    // user.name.toLowerCase().includes(query)).map((user)=>(
                    <li key={user.id} className="listItem">
                        {user.name} 
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default SearchBar;