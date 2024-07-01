import React from "react";
import Navbar from "./Navbar";

const Login = ({connectWallet, account}) => {


    {console.log(account)}

    return (
        <div className='custom-bg px-5'>
            <div className='isolate z-50'>
                <Navbar connectWallet={connectWallet}/>
            </div>
            
            <div className='isolate z-50'>
            <div className='flex lg:px-[30rem] w-full '>

                <div className='lg:w-full text-center justify-center h-full pt-[10rem] px-4 '>
                    <h2 className='lg:text-5xl text-4xl font-semibold leading-tight'>Electoral commission of <br /> Namibia(ECN)</h2>
                    <p className='py-5 px-4'>Vote securely on the blockchain and protect your vote</p>
                    
                    <button onClick = {connectWallet} class="btn btn-active lg:w-full w-1/2 text-white lg:text-sm  btn-primary bg-gradient-to-r
                    from-sky-500 to-indigo-500 border-none hover:bg-purple-100 lg:py-5 lg:px-10 lg:h-[4rem] h-[rem]">
                        {account !== null ? 'Vote your candidate' : 'Connect verified wallet'}
                    </button>

                </div>

            </div>
            </div>
        </div>
    )
}

export default Login;
