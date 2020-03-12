import React, {useState, useEffect} from "react"
import axios from "axios"

function Register() {
    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:5000/api/register", data)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.payload)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="username" name="username" placeholder="username" value={data.username} onChange={handleChange} />
            <input type="passowrd" name="password" placeholder="password" value={data.password} onChange={handleChange} />
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default Register