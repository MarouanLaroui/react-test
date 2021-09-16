import './App.css';
import TaskList from './components/TaskList';

const props = {
  name:'Todo-List',
  tasks: ["Call mom !","Buy the milk","Tell her to fuck off"]
}
function App() {
  return (
    <div className="App">
      <TaskList taks={props.tasks} name={props.name}/>
    </div>
  );
}

export default App;
