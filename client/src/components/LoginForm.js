import Button from './Button'
import Input from './Input'
import style from '../assets/css/LoginForm.module.css'

export default function LoginForm(props) {
    return (
        <>

            <form className={style.form} onSubmit={props.onSubmit}>
                <header className={style.formHeader}>
                    <h2 className=''>Log in</h2>
                </header>
                <div className={style.formContent}>
                    <div className={style.inputsArea}>
                        <div className={style.inputField}>
                            <label htmlFor="email">Email</label>
                            <Input type="email" id="email" name="email" onChange={(e) => props.setEmail(e.target.value)}></Input>
                        </div>
                        <div className={style.inputField}>
                            <label htmlFor="password">Password</label>
                            <Input name="password" type="password" id="password" onChange={(e) => props.setPassword(e.target.value)}></Input>
                        </div>
                    </div>

                    <Button type="submit">Log in</Button>
                </div>
            </form>

        </>
    )
}