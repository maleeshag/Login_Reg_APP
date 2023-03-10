import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {profileValidation} from '../helper/validate'
import convertToBase64 from '../helper/convert'

export default function Profile(){

    const [file,setFile]=useState();

    const formik = useFormik({
        initialValues:{
          firstname:'',
          lastname:'',
          mobile:'',
          email:'',
          address:''
        },
        validate:profileValidation,
        validateONBlur:false,
        validateOnChange:false,
        onSubmit:async values=>{
            values = await Object.assign(values,{profile:file || ''})
             console.log(values)
        }

    })

/**Formik does't support file upload so we need to create this handler */
const onUpload=async e=>{
    const base64=await convertToBase64(e.target.files[0]);
    setFile(base64);
}

    return(
        <div className='container mx-auto'>
            
            <Toaster position='top-center' reverseOrder={false}></Toaster> 

            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass} style={{width:"45%"}}>
                    <div className='title flex flex-col items-center'>
                        <h4 className='text-4xl font-bold'>Profile</h4>
                        <span className='py-4 text-xl w-2/3 text-center'>
                            You can update details.
                        </span>
                    </div>
                    <form className='py-1' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                            <label htmlFor='profile'>
                            <img src={file || avatar} className={styles.profile_img} alt="avatar"></img>
                            </label>
                            <input onChange={onUpload} type="file" id="profile" name="profile"></input>

                            
                           
                        </div>
                        <div className='textbox flex flex-col items-center gap-6'>

                          <div className='name flex w-3/4 gap-10'>
                            <input {...formik.getFieldProps('firstname')} type="email" className={styles.textbox} placeholder='firstname'></input>
                            <input {...formik.getFieldProps('lastname')} type="email" className={styles.textbox} placeholder='lastname'></input>
                          </div>

                          <div className='name flex w-3/4 gap-10'>
                            <input {...formik.getFieldProps('mobile')} type="email" className={styles.textbox} placeholder='Mobile No.'></input>
                            <input {...formik.getFieldProps('email')} type="email" className={styles.textbox} placeholder='email'></input>
                          </div>

                          
                            <input {...formik.getFieldProps('address')} type="email" className={styles.textbox} placeholder='Address'></input>
                            <button type='submit' className={styles.btn}>Register</button>
                          

                        </div>
                        <div className='text-center py-4'>
                            <span>come back later?<Link className='text-red-500' to='/'>Log Out</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}