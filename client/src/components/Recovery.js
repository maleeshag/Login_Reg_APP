import React from 'react';
import {Link} from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {passwordValidate} from '../helper/validate'

export default function Password(){

    const formik = useFormik({
        initialValues:{
            password:''
        },
        validate:passwordValidate,
        validateONBlur:false,
        validateOnChange:false,
        onSubmit:async values=>{
             console.log(values)
        }

    })



    return(
        <div className='container mx-auto'>
            
            <Toaster position='top-center' reverseOrder={false}></Toaster> 

            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass}>
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-4xl font-bold'>Recovery</h4>
                        <span className='py-4 text-xl w-2/3 text-center'>
                            Enter OTP to recover password.
                        </span>
                    </div>
                    
                    <form className='pt-20' onSubmit={formik.handleSubmit}>
                        
                        <div className='textbox flex flex-col items-center gap-6'>
                            <div className='input text-center'>
                                <span className='py-4 text-sm text-left text-black-200'>
                                Enter 6 digit OTP sent to your email address.
                                </span>
                                <input {...formik.getFieldProps('password')} type="password" className={styles.textbox} placeholder='OTP'></input>
                                
                            </div>
                            <button type='submit' className={styles.btn}>Recovery</button>
                        </div>
                        <div className='text-center py-4'>
                            <span>Can't get OTP?<button className='text-red-500'>Resend</button></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}