import React from 'react';
import './App.css';
import Compteur from './components/CptView/Compteur';
import Compteur2 from './components/CptView/Compteur2';
import SearchForm from './components/SearchForm/SearchFrom';
import Todo from './components/TodoLst/Todo';
import DataContextProvider from './DataContext';
// import CommentsView from './components/Comments/CommentsView'
// import { Welcome } from './components/HelloView/Hello';


function App() {
  return (
    <div className="App">
        <DataContextProvider>
        {/* <Compteur />
        <Compteur2 />
        <Todo></Todo> */}
        <SearchForm></SearchForm>
        </DataContextProvider>

      {/* <CommentsView></CommentsView> */}
    </div>
  );
}

export default App;
