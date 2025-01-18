import { Provider } from 'react-redux';
import './App.css';
import { store } from './app/store';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';



function App() {
  return (
    <>
     <Provider store={store}>
        <AddTodo />
        <Todos />
     </Provider>
    
    </>
  )
}

export default App
