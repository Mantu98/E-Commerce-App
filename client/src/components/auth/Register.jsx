import React, {useState} from 'react'
import Layout from '../layouts/Layout'
import styles from './Auth.module.css'
import toast from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:4040/api/v1/auth/register',{name, email,password,phone,address});
            if(res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate('/login');
            }else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Smothing went wrong');
        }
    }

  return (
    <Layout title={'register - ecomm'}>
        <div className={styles.formContainer}>
            <h1 className={styles.title}>REGISTER FORM</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className="mb-3">
                    {/* <label htmlFor="Name" className="form-label">
                    Name
                    </label> */}
                    <input
                    className={styles.input}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    // className="form-control"
                    id="Name"
                    placeholder='Enter Your Name'
                    required
                    />
                </div>
                
                <div className="mb-3">
                    {/* <label htmlFor="Email" className="form-label">
                    Email
                    </label> */}
                    <input
                    className={styles.input}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="Email"
                    placeholder='Enter Your Email'
                    required
                    />
                </div>
                
                <div className="mb-3">
                    {/* <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                    </label> */}
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    id="exampleInputPassword1"
                    placeholder='Enter Your Password'
                    required
                    />
                </div>
                
                <div className="mb-3">
                    {/* <label htmlFor="Name" className="form-label">
                    Phone
                    </label> */}
                    <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                    id="Phone"
                    placeholder='Enter Your Phone'
                    required
                    />
                </div>
                
                <div className="mb-3">
                    {/* <label htmlFor="Name" className="form-label">
                    Address
                    </label> */}
                    <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={styles.input}
                    id="Address"
                    placeholder='Enter Your Address'
                    required
                    />
                </div>
                
                <button type="submit" className={styles.button}>
                    REGISTER
                </button>
            </form>

        </div>
    </Layout>
  )
}

export default Register