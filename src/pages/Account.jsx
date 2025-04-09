import React from 'react'
import Button from '../components/Button'
import { ShoppingCart, LogIn, UserPlus, Heart, CreditCard } from 'lucide-react';

const Account = () => {
  return (
    <div className='w-screen h-screen overflow-hidden flex justify-center items-center bg-[#F5F5F5]'>
        <div className='flex flex-col gap-5 h-full w-full max-w-md items-center justify-center'>
            <h2>Account</h2>
            <form>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' placeholder='Enter your email' className='border border-gray-300 p-2 rounded-md'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Enter your password' className='border border-gray-300 p-2 rounded-md'/>
                </div>
                <Button variant='outline'>Signup</Button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Account