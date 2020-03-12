import React, {useState} from "react"
import axios from "axios"

function Users() {
    const [users, setUsers] = useState()

    axios.get("http://localhost:5000/api/users")
        .then(res => {
            console.log(res)
            setUsers(res)
        })
        .catch(err => {
            console.log(err)
        })
    return(
        <>
            <h1>Users</h1>
            {/* {users.map(user => {
                return(
                    <h3>{user.username}</h3>
                )
            })} */}
        </>
    )
}

export default Users