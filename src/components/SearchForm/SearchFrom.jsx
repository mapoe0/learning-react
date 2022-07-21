import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
export default function SearchForm() {
    const {data} = useContext(DataContext)

    return (<div>
        <input />
        <p>Data récup du provider: {data.title}</p>
    </div>)
}
