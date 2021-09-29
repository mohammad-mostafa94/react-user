import { useState } from 'react';
import './App.css';

function App() {

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(data => setUsers(data))
    // }, []);
    const [count, setCount] = useState(100);
    const counter = () => {
      
      if (count > 0) {
        setCount(count - 10);
        return;
      }
    }
  return (
    <div className="App">
    <h1>count:{count}</h1>
    <button onClick={counter}>Decrease</button>
    {/* <h1>{users.length}</h1>
    {
      users.map(user => <User name = {user.name} email = {user.email}></User>)
    }
      <User></User> */}
    </div>
  );
}
const User = (props)=>{
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <p>email:{props.email}</p>
    </div>
  )
}

export default App;
