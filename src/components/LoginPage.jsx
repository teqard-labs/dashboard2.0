import React from 'react'
import Login from "./Login"
import Header from './Header'
import './bg.css'

export default function LoginPage() {
    return (
        
        <div className=' flex flex-col background justify-center w-screen h-screen items-center'>
            <div class="h-[70vh] px-4 py-4 w-[22vw] relative cursor-pointer mb-5">
                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform  hover:scale-105 transition duration-300">
                    <div class="h-full w-full bg-white rounded-lg shadow-2xl">
                        <div className='px-4 py-4'>
                            <Header
                            heading="Login to your account"
                            paragraph="Don't have an account yet? "
                            linkName="Signup"
                            linkUrl="/signup"
                        />
                            <Login />
                            </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
