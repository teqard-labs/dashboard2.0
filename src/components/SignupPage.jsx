import React from 'react';
import './Fields'
import Header from "./Header";
import Signup from "./Signup";
import './bg.css'

export default function SignupPage() {
    return (

        <div className='flex flex-col background justify-center w-screen h-screen items-center'>
            <div class="h-[82vh] px-4 py-4 w-[22vw] relative cursor-pointer mb-5">
                <div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                <div class="absolute inset-0 transform  hover:scale-105 transition duration-300">
                    <div class="h-full w-full bg-white rounded-lg shadow-2xl">
                        <div className='px-4 py-4'>
                            <Header
                                heading="Signup to create an account"
                                paragraph="Already have an account? "
                                linkName="Login"
                                linkUrl="/login"
                            />
                            <Signup/>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}