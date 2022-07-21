import './App.css';
import  Compteur from './components/CptView/Compteur';
import Compteur2 from './components/CptView/Compteur2';
import Todo from './components/TodoLst/Todo';
// import CommentsView from './components/Comments/CommentsView'
// import { Welcome } from './components/HelloView/Hello';

function App() {
  return (
    <div className="App">
      <Compteur/>
      <Compteur2/>
      <Todo></Todo>
      {/* <CommentsView></CommentsView> */}
    </div>
  );
}

export default App;
