import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Signup() {

  const signinCredentials = {
    username: "",
    password: "",
    conpassword: "",
    phone: "",
    mailid: ""
  }

  const [signin, setsignin] = useState(signinCredentials)
  const [allErrors, setallErrors] = useState({})
  const [submit, setsubmit] = useState(false)

  const handleChanges = (e) => {
    const { name, value } = e.target
    setsignin({ ...signin, [name]: value })
    console.log(signin, "signin")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setallErrors(validate(signin))
    setsubmit(true)

    //should be changed later
    let clientsArr = JSON.parse(localStorage.getItem('User')) || [];
    clientsArr.push(signin);
    localStorage.setItem('User', JSON.stringify(clientsArr));
  }

  useEffect(() => {
    if (Object.keys(allErrors).length === 0 && submit) {
      console.log(signin)
    }
  }, [allErrors])

  const validate = (val) => {
    const err = {}
    if (!val.username) {
      err.username = "username is required"
    }
    if (!val.password) {
      err.password = "password is required"
    } else if (val.password.length < 4) {
      err.password = "password should be more than 4 letters"
    } else if (val.password.length > 12) {
      err.password = "password should be less than 12 letters"
    }
    if (val.confirmpassword !== val.password) {
      err.confirmpassword = "The password and confirm password should be same"
    } else if (!val.confirmpassword) {
      err.confirmpassword = "confirm password is required"
    }
    if (!val.phonenumber) {
      err.phonenumber = "phone number is required"
    }
    if (!val.mailid) {
      err.mailid = "email is required"
    }
    return err
  }

  return (
    <>
      <header className="bg-sky-900 rounded-br-3xl">
        <nav className="p-6 mx-auto container relative">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold uppercase">Poke-Catch</h1>
            </div>

            <div className="hidden md:flex space-x-8">

              <Link to="/" className="text-2xl font-medium text-white rounded-3xl px-6 pt-2 p-3 hover:bg-red-500 hover:text-black">
                login
              </Link>

              <Link to="/Home" className="text-2xl font-medium text-white rounded-3xl px-6 pt-2 p-3 hover:bg-red-500 hover:text-black">
                pokemon
              </Link>

            </div>
          </div>
        </nav>
      </header>

      <section className="pt-20 px-20 pb-20 width-md mx-auto mt-20 mb-10 rounded-2xl bg-red-600 w-96 shadow-2xl shadow-black flex-col flex items-center justify-center box-border">
        <div className="flex gap-3 mb-5">
          <div className="bg-green-900 rounded-3xl p-2 border hover:bg-green-500 animate-wiggling"></div>
          <div className="bg-blue-900 rounded-3xl p-2 border hover:bg-blue-500 animate-wiggle"></div>
          <div className="bg-red-900 rounded-3xl p-2 border hover:bg-red-500 animate-wiggled"></div>
        </div>

        <form className="container flex-col flex items-center justify-center gap-5 bg-black w-80 rounded-xl py-14" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChanges}
            value={signin.username}
            className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
          />
          <p className="text-red-500 text-xl text-center">{allErrors.username}</p>

          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChanges}
            value={signin.password}
            className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
          />
          <p className="text-red-500 text-xl text-center">{allErrors.password}</p>

          <input
            type="password"
            placeholder="confirm password"
            name="conpassword"
            onChange={handleChanges}
            value={signin.conpassword}
            className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
          />
          <p className="text-red-500 text-xl text-center">{allErrors.confirmpassword}</p>

          <input
            type="number"
            placeholder="phone number"
            name="phone"
            onChange={handleChanges}
            value={signin.phone}
            className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
          />
          <p className="text-red-500 text-xl text-center">{allErrors.phonenumber}</p>

          <input
            type="email"
            placeholder="email"
            name="mailid"
            onChange={handleChanges}
            value={signin.mailid}
            className="px-5 py-3 rounded-xl border-2 border-amber-900 shadow shadow-black"
          />
          <p className="text-red-500 text-xl text-center">{allErrors.mailid}</p>

          <button className="text-lg uppercase font-bold bg-red-600 px-6 py-2 text-white rounded-xl border-2 border-black shadow shadow-black hover:text-black">
            signup
          </button>

        </form>

        <div className="flex-col flex items-center justify-items-center mt-10 w-60 gap-3">
          <p className="text-white">already have an account</p>
          <Link to="/" className="text-lg uppercase font-bold text-white rounded-xl px-6 py-2 bg-green-600 hover:text-black shadow shadow-black">login</Link>
        </div>

      </section>
    </>
  )
}

export default Signup