import React, { Component, useContext, useState } from "react";
import { DataContext } from "../../DataContext";
import '../SearchForm/SearchForm.css'
export default function SearchForm() {
    const { data } = useContext(DataContext)
    const [message,setMessage] = useState('')
    const handleChange = event => {
        setMessage(event.target.value)
        console.log(message)
    }
    return (<div>
        <div className="block"><p className="test">Commncer</p></div>
        <input name="field" id="field" onChange={handleChange}/>
        <button>Send</button>
        <p>Data récup du provider: {data.title}</p>
    </div>)
}
