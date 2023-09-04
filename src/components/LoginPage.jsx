import React from 'react';
import Login from "./Login";
import Header from './Header';
import Placeholder from "../images/ph.png";
import Logo from "../images/ufarms.png";

export default function LoginPage() {
    return (
        <div className='flex flex-row background justify-center w-screen h-screen md:items-start md:pl-[13%]'>
            <div className="flex flex-col md:h-[78vh] w-[80vw] px-4 py-4 h-[70vh] md:w-[22vw] relative cursor-pointer mb-5 md:mt-[15%]">
                <div className="absolute inset-0 bg-transparent opacity-25 rounded-lg shadow-2xl"></div>
                <div className="absolute inset-0 transform hover:scale-105 transition duration-300">
                    <div className="h-full w-full bg-transparent rounded-lg flex">
                        <div className='px-4 py-4 flex-1'>
                              {/* <Header
                            heading="Login to your account"
                            paragraph="Don't have an account yet? "
                            linkName="Signup"
                            linkUrl="/signup"
                        /> */}
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <div className='flex flex-col md:h-[78vh] w-[80vw] px-4 py-4 h-[70vh] md:w-[22vw] absolute right-[10%] -top-[20%] cursor-pointer mb-5 md:mt-[15%]'>
                <img src={Logo} alt="placeholder" className='mb-14' />
                <img src={Placeholder} alt="placeholder" />
                
                </div> 
            </div>
        </div>
    )
}
