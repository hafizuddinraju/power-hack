import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import login_validate from './validate';
import './Login.css'


const Login = () => {
    const [show, setShow] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate : login_validate,
        onSubmit
    })
    async function onSubmit(values){
        
        
    }
    return (
        <>
          <div className="flex h-screen">
            <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
                <div className='imgStyle'>
                    <div className='cartoonLoginImg'></div>
                    <div className='cloud_one'></div>
                    <div className='cloud_two'></div>
                </div>
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center py-10">
                    <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Login</h1>
                <p className='w-3/4 mx-auto text-gray-900'>Dynamically evisculate integrated data rather than distinctive materials.</p>
            </div>

            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                <div className={`input_group ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className='input_text'
                    {...formik.getFieldProps('email')}
                    />
                    <span className='icon flex items-center px-4'>
                        <HiAtSymbol size={25} />
                    </span>
                   
                </div>
                {formik.errors.email && formik.touched.email ? <span className='text-rose-500 font-bold text-sm'>{formik.errors.email}</span> : <></>}

                <div className={`input_group ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className='input_text'
                    {...formik.getFieldProps('password')}
                    />
                     <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                        <HiFingerPrint size={25} />
                    </span>
                   
                </div>

                {formik.errors.password && formik.touched.password ? <span className='text-rose-500 font-bold text-sm'>{formik.errors.password}</span> : <></>}
               
                <div className="input-button">
                    <button type='submit' className='button'>
                        Login
                    </button>
                </div>
            
                
            </form>

            {/* bottom */}
            <p className='text-center text-gray-400 '>
                don't have an account yet? <Link to='/signup'><span className='text-blue-700'>Sign Up</span></Link>
            </p>
        </section>
                    </div>
                </div>
            </div>
  
        </div>
        </>
    );
};

export default Login;