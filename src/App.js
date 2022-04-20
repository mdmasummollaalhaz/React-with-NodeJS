import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/user')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div className="App">
      <h1>Data: {users.length} </h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>Id:{user.id} Name: {user.name} email{user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
