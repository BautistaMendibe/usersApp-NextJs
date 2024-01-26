'use client'

import React from 'react';

function Users({users}) {
    return (
        <ul>
            {
                users.map((user) => {
                    return (
                        <li key={user.id}
                            className='flex justify-between bg-slate-400 mb-2 p-4 rounded-md text-black'>
                            <div>
                                <h5 className='font-bold'>{user.id} {user.first_name} {user.last_name}</h5>
                                <p>email: {user.email}</p>
                            </div>
                            <img src={user.avatar} className='rounded-full w-20' alt='foto'/>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Users;