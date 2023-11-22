import React from 'react'
import '../../assets/css/tailwind.css'

function Login() {
  return (
    <div className="text-white h-screen flex justify-center items-center">
        <div className="bg-secondary-blue border border-blue-500 rounded-md p-20 shadow-md relative">
            <h1 className="text-4xl font-bold text-center mb-6">Masuk Akun</h1>
            <form action="">
                <div className="relative my-4">
                    <label htmlFor="">Username</label>
                    <input type="text" className="block rounded-xl w-72 py-2.5 px-0 text-sm text-black border-0 border-b-2 focus:outline-none focus:border-blue-gray-500 focus:ring-blue-gray-500 focus:ring-1 peer"/>
                </div>
                <div className="relative my-4">
                    <label htmlFor="">Password</label>
                    <input type="password" className="block rounded-xl w-72 py-2.5 px-0 text-sm text-black border-0 border-b-2 focus:outline-none focus:border-blue-gray-500 focus:ring-blue-gray-500 focus:ring-1 peer"/>
                </div>
                <button type="button" className="w-full pb-2 pt-2 place-content-center rounded-xl font-bold bg-primary-blue">Masuk</button>
            </form>
        </div>
    </div>
  )
}

export default Login