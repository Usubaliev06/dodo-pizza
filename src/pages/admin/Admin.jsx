import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Api from '../../api/Api'
import css from './Admin.module.css'
import ACsetAuth, { authAC } from '../../redux/actionCreators'



export default function Admin() {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [passwordType, setPasswordType] = useState("")

    const distpach = useDispatch();

    const submit = (e) => {
        e.preventDefault()
        
        distpach(authAC({
            login:login,
            password:password,
        }))
    }

    const handleChange = (e) => {
        setLogin(e.target.value)
    }

    const passwordChange = (e) => {
        setPassword(e.target.value)
    }



    

        return (
            <div className={css.admin}>
                <form onSubmit={submit} className={css.from_wrapper}>

                    <input
                        type="text"
                        required
                        placeholder="login"
                        onChange={handleChange}
                        value={login}
                    />

                    <input
                        type={passwordType ? "text" : "password"}
                        required
                        placeholder="password"
                        onChange={passwordChange}
                        value={password}
                    />

                    <div onClick={() => setPasswordType(!passwordType)}>Show</div>

                    <button>Enter</button>

                </form>
            </div>
        )
    }
