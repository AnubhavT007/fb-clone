import './App.css';
import Feed from './Feed.js';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar.js'
import Widgets from './Widgets';
import { useStateValue} from "./StateProvider";

function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
      <>
      <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
          
          <Widgets /> 
          {/*Chats Section*/}
        </div>
        
        </>
        
        )}
      
     
    </div>
  );
}

export default App;
