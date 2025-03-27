import React, { useContext } from 'react'
import { MyInput } from '../UI/input/MyInput'
import { MyButton } from '../UI/buttom/MyButton'
import { AuthContext } from '../../context'

export const Login = () => {

    const { isAuth, setIsAuth } = useContext(AuthContext)
    const [username, setUsername] = React.useState('admin');
    const [password, setPassword] = React.useState('admin');

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')

    }

    return (
        <div className='authorization-wrapper'>
            <h1>Авторизация</h1>
            <div className='login-form'>
                <form onSubmit={login}>
                    <MyInput
                        type="text"
                        value={username}
                        onChange={handleInputChange}
                    />
                    <MyInput
                        type="password"
                        value={password}
                        onChange={handleInputChange}
                        placeholder="Пароль"
                    />
                    <MyButton>Войти</MyButton>
                </form>
            </div>
        </div>
    )
}
