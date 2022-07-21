import React,{createContext,useState} from "react";

export const DataContext = createContext();

const DataContextProvider = (props) =>{
    const [data] = useState({title: "Bonjour le provider"});

      return (
        <DataContext.Provider value ={{data}}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;