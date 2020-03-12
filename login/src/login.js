import React, {useState, useEffect} from "react"
import axios from "axios"

function Login() {
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

        axios.post("http://localhost:5000/api/login", data)
            .then(res => {
                console.log(res.data.message)
                localStorage.setItem("token", res.data.message)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="username" name="username" placeholder="username" value={data.username} onChange={handleChange} />
            <input type="passowrd" name="password" placeholder="password" value={data.password} onChange={handleChange} />
            <button type="submit">Sign In</button>
        </form>
    )
}

export default Login