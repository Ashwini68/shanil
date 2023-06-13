import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TextInput from './TextInput';
import './Login.css';

export default function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const [userData, setUserData] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        try {

            const response = await axios.post('http://172.19.113.60:3000/api/login', {
                username: name,
                password: password,

            });

            if (response.status === 200) {
                const data = response.data.data;
                console.log(response)
                setUserData(data);
                console.log(data)

                if (response.data.data.role === 'admin') {
                    navigate('/admin');
                } else {
                    navigate('/user');
                }
            }

        } catch (error) {
            setErrorMsg('An error occurred');
        }
    }

    return (

        <div className='bg-div'>
            <div className='container'>
                <center>
                    <form className='form' onSubmit={handleSubmit}>
                        <div>

                            <svg width="110" height="35" viewBox="0 0 110 35" fill="none" xmlns="http://www.w3.org/2000/svg" className='atos'>

                                <path d="M98.6373 14.3335C92.8957 12.539 91.274 10.9992 91.274 9.35332C91.274 7.03842 94.101 5.6686 98.2209 5.6686C99.8097 5.6686 100.96 5.80664 101.76 5.97654L101.738 10.5532L107.151 10.6488L107.535 1.45294C104.982 0.858288 101.048 0.14683 97.7607 0.14683C90.1564 0.14683 84.1518 3.64041 84.1518 9.95859C84.1518 15.9688 88.3265 18.1881 95.7117 20.4075C101.409 22.1277 102.012 23.4444 102.012 25.1435C102.012 27.0867 99.2071 28.5415 95.6241 28.5415C91.9534 28.5415 87.8773 27.3309 85.379 26.3328C84.6997 27.7451 83.2424 30.113 82.2891 31.4616C85.9926 33.4367 90.4084 34.5092 95.372 34.5092C102.944 34.5092 109.375 31.0369 109.375 24.1453C109.354 18.7934 106.033 16.6272 98.6373 14.3335Z" fill="#00A39B" />
                                <path d="M23.8101 0.40168H9.09454V4.58548H12.7871L3.58303 29.7626H0.646484V33.9358H12.9953V29.752H10.0916L11.7681 25.1647H25.1469L26.8234 29.752H24.106V33.9358H37.3095V29.752H34.5592L23.8101 0.40168ZM13.6637 19.9402L18.452 6.83667L23.2513 19.9402H13.6637Z" fill="#00A39B" />
                                <path d="M74.0821 6.12521C72.2632 5.37127 70.258 4.95714 68.1433 4.95714C67.6063 4.95714 67.0694 4.989 66.5435 5.03147C64.7027 7.47379 63.6069 10.4895 63.6069 13.7495C63.6069 19.8765 67.4529 25.1328 72.9316 27.3734C71.551 28.2972 69.9074 28.8388 68.1433 28.8388C63.2782 28.8388 59.3336 24.7612 59.3336 19.7385C59.3336 17.5723 60.0677 15.5865 61.295 14.015C61.295 11.7107 62.1387 7.51627 63.4207 5.67922C57.2627 7.60122 52.8798 13.261 52.8798 19.7385C52.8798 22.3189 53.5591 24.7293 54.7535 26.8425C53.3071 28.3185 51.3567 29.1574 49.494 29.1574C46.9738 29.1574 45.1549 27.246 45.1549 24.3789V11.2328H53.0222V5.99778H45.1549V0.337967H38.0875V5.99778H32.9047V11.2328H38.0875V25.0585C38.0875 32.1625 43.1936 34.488 48.1572 34.488C52.31 34.488 55.6958 32.5872 57.5695 30.3998C60.3088 32.9483 64.0343 34.5198 68.1433 34.5198C76.4598 34.5198 83.4067 27.9362 83.4067 19.7385C83.4177 13.6114 79.5607 8.36577 74.0821 6.12521ZM76.5365 22.5206C72.811 21.4587 70.0717 17.9439 70.0717 13.7495C70.0717 12.7832 70.2251 11.8487 70.4991 10.9674C74.2245 12.0293 76.9639 15.5441 76.9639 19.7385C76.9529 20.7048 76.8104 21.6393 76.5365 22.5206Z" fill="#00A39B" />

                            </svg>

                            <h1 className='h1'>CX Asset Management</h1>

                        </div>

                        <div>
                            <div>
                                <div className='login_email'>email</div>
                                <div className='email-text-input'>
                                    <TextInput

                                        id="userId"
                                        type="text"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                    />

                                </div>

                            </div>

                            <div className='login_password'> password </div>
                            <div className='password-text-input'>
                                <TextInput

                                    // label="Password:"

                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />

                            </div>
                        </div>

                        {
                            errorMsg &&
                            <div className="error-message">{errorMsg}</div>

                        }

                        <Button type="submit" className='login-button'>Login</Button>
                        <div className='login-text'>© copyright 2023 For internal use only</div>

                    </form>

                </center>

            </div>

        </div>

    );

}