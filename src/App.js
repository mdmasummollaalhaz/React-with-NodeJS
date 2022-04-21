import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/user')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    // console.log(name, email);
    const user = { name, email };

    // post data to server
    fetch('http://localhost:6001/user', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        const newUsers = [...users, data];
        setUsers(newUsers);
        console.log(data);
      });
  };
  return (
    <div className="App">
      <h1>Data: {users.length} </h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="Name" />
        <input type="email" name="email" id="" placeholder="Email" />
        <input type="submit" value="Add user" />
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            Id:{user.id} Name: {user.name} email{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
