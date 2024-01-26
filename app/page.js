import React from 'react'
import Users from "@/components/Users";

async function getUsers() {
    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json();
    return data.data;
}

async function HomPage() {

    const users = await getUsers();

    return (
        <Users users={users}/>
    )
}

export default HomPage