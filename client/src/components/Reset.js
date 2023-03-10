import React from 'react';
import {Link} from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {resetPasswordValidation} from '../helper/validate'

export default function Password(){

    const formik = useFormik({
        initialValues:{
            password:'',
            confirm_pwd:''
        },
        validate:resetPasswordValidation,
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
                <div className={styles.glass} style={{width:"50%"}}>

                    <div className='title flex flex-col items-center'>
                        <h4 className='text-4xl font-bold'>Reset</h4>
                        <span className='py-4 text-xl w-2/3 text-center'>
                            Enter New Password.
                        </span>
                    </div>
                    
                    <form className='py-20' onSubmit={formik.handleSubmit}>
                        
                        <div className='textbox flex flex-col items-center gap-6'>
                                <input {...formik.getFieldProps('password')} type="password" className={styles.textbox} placeholder='password'></input>
                                <input {...formik.getFieldProps('password')} type="confirm_pwd" className={styles.textbox} placeholder='consfirm password'></input>
                                <button type='submit' className={styles.btn}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}