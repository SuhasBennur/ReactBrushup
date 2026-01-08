import React, { useState, useEffect } from "react";
//Side effects (API calls, subscriptions)
export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // side effect: fetch data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // empty dependency → runs once

  return (
    <ul>
      {users.map(user => 
      <li key={user.id}>
        {user.name}
        </li>)}
    </ul>
  );
}
