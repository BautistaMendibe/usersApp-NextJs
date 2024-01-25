import React from 'react'

async function getUsers(){
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json();
  return data.data;
}

async function HomPage() {
  
  const users = await getUsers();
  
  return (
    <div>
      {
        <ul>
          {
            users.map((user) => {
              return (
                <li key={user.id} className=''>
                  <h5>{user.id} {user.first_name} {user.last_name}</h5>
                  <p>email: {user.email}</p>
                </li>
              )
            })
          }
        </ul>
      }
    </div>
  )
}

export default HomPage