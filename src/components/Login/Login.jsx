import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";

function LoginForm({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'} type='password'/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type="checkbox"/> Remember me
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

function Login({logIn}) {
    const onSubmit = (formData) => {
        logIn(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default connect(null, {logIn})(Login)