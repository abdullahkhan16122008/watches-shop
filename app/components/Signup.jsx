"use client"
import Link from 'next/link'
import React from 'react'
import axios from 'axios'


const Signup = () => {
let [form, setForm] = React.useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    let handleChange = (e) => {
        let { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    let handleSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post('https://backend-store-bkh1.onrender.com/signup', form ,{ withCredentials: true }).then((response)=>{
            let {message, auth} = response.data;
            alert(message)
        }).catch((response)=>{alert(response.data.message)})
        setForm({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
    })
    }
    return (
        <div className='justify-items-center'>
            <form method="post" onSubmit={handleSubmit} className='relative top-[150px] border-2 px-20 py-10' >
                <h1 className='text-4xl text-center font-medium mb-10'>Signup</h1>
                <div>
                    <h2 className='my-3 text-xl'>Enter Name <span className='text-red-500'>*</span></h2>
                    <input type="text" name="name" id="" value={form.name} onChange={handleChange} className='px-3 py-1 w-[290px] border-1 ' />
                </div>
                <div>
                    <h2 className='my-3 text-xl'>Enter Email <span className='text-red-500'>*</span></h2>
                    <input type="email" name="email" id="" value={form.email} onChange={handleChange} className='px-3 py-1 w-[290px] border-1 ' />
                </div>
                <div>
                    <h2 className='my-3 text-xl'>Enter Password <span className='text-red-500'>*</span></h2>
                    <input type="password" name="password" id="" value={form.password} onChange={handleChange} className='px-3 py-1 w-[290px] border-1 ' />
                </div>
                <div>
                    <h2 className='my-3 text-xl'>Confirm Password <span className='text-red-500'>*</span></h2>
                    <input type="password" name="confirmPassword" id="" value={form.confirmPassword} onChange={handleChange} className='px-3 py-1 w-[290px] border-1 ' />
                </div>
                <div className='text-center my-5'>
                    <span>Already have an Account? <Link href={'/login'} className='text-green-400'>Login</Link></span>
                </div>
                <div className='text-center mt-5'>
                    <button type='submit' className='bg-black border-black text-center px-[30px] my-4 scale-[0.95] duration-300 py-[10px] border-2 text-white font-medium max-sm:scale-[0.80] hover:bg-white hover:text-black' >Submit</button>
                </div>

            </form>
        </div>
    )
}


export default Signup
