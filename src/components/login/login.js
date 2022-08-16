import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";

function Login() {
    const [loginDetails, setloginDetails] = useState({
        loginuser: "",
        loginpassword: ""
    })

    const [Loginerrors, setLoginerrors] = useState({})
    console.log(Loginerrors)
    const loginCompare = ({})

    const [loginstate, setloginstate] = useState(false)

    const loginChange = (e) => {
        const { name, value } = e.target
        setloginDetails({ ...loginDetails, [name]: value })
        console.log(loginDetails, "login-details")
    }

    const loginValdetails = JSON.parse((localStorage.getItem("User")));

    loginValdetails.filter((e) => {
        loginCompare.username = e.username
        loginCompare.password = e.password
    })
    console.log(loginCompare)
    console.log(loginCompare.username)

    const loginSubmit = (e) => {
        e.preventDefault();
        setloginstate(true)
        setLoginerrors(loginValidate(loginDetails))
    }

    useEffect(() => {
        if (Object.keys(Loginerrors).length === 0 && loginstate) {
            console.log(loginDetails)
        }
    }, [Loginerrors])

    const loginValidate = (e) => {
        const errors = {}
        if (e.username !== loginCompare.username) {
            errors.username = "No user is found in this name"
        }
        else if (!e.username) {
            errors.username = "Please enter the username"
        }
        if (e.password !== loginCompare.password) {
            errors.password = "The password is not correct, please try again"
        }
        else if (!e.password) {
            errors.password = "Please enter your password"
        }
        return errors
    }

    // const formValues = (e, setvalue) => {
    //     setvalue(e.target.value)
    // }

    // useEffect(()=>{
    //     e.preventDefault()
    //     try {
    //         await axios.post("http://localhost:9000/testAPI", {
    //             name, forPassword
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    //  },[])
    return (
        <>
            <header className="bg-sky-900 rounded-br-3xl">
                <nav className="p-6 mx-auto container relative">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold uppercase">Poke-Catch</h1>
                        </div>

                        <div className="hidden md:flex space-x-8">

                            <Link to="/signup" className="text-2xl font-medium text-white rounded-3xl px-6 pt-2 p-3 hover:bg-red-500 hover:text-black">
                                Signup
                            </Link>

                            <Link to="/Home" className="text-2xl font-medium text-white rounded-3xl px-6 pt-2 p-3 hover:bg-red-500 hover:text-black">
                                pokemon
                            </Link>

                        </div>
                    </div>
                </nav>
            </header>

            <section className="pt-8 px-20 pb-20 width-md mx-auto mt-20 mb-10 rounded-2xl bg-red-600 w-96 shadow-2xl shadow-black flex-col flex items-center justify-center box-border">
                <div className="flex gap-3 mb-5">
                    <div className="bg-green-900 rounded-3xl p-2 border hover:bg-green-500 animate-wiggling"></div>
                    <div className="bg-blue-900 rounded-3xl p-2 border hover:bg-blue-500 animate-wiggle"></div>
                    <div className="bg-red-900 rounded-3xl p-2 border hover:bg-red-500 animate-wiggled"></div>
                </div>

                <form className="container flex-col flex items-center justify-center gap-3 bg-black w-80 rounded-xl py-14" onSubmit={loginSubmit}>
                    <input
                        type="text"
                        placeholder="username"
                        name="loginuser"
                        value={loginDetails.loginuser}
                        onChange={loginChange}
                        className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
                    />
                    <p className="text-red-500 text-xl text-center">{Loginerrors.password}</p>

                    <input
                        type="password"
                        placeholder="password"
                        name="loginpassword"
                        value={loginDetails.loginpassword}
                        onChange={loginChange}
                        className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
                    />
                    <p className="text-red-500 text-xl text-center">{Loginerrors.username}</p>

                    <button className="text-lg uppercase font-bold bg-red-600 px-6 py-2 text-white rounded-xl border-2 border-black shadow shadow-black hover:text-black" type="submit">
                        login
                    </button>

                </form>

                <div className="flex-col flex items-center justify-items-center mt-10 w-60 gap-3">
                    <p className="text-white">don't have an account</p>
                    <Link to="signup/" className="text-lg uppercase font-bold text-white rounded-xl px-6 py-2 bg-green-600 hover:text-black shadow shadow-black">Signup</Link>
                </div>

            </section>
        </>
    )
}

export default Login