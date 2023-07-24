import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";

function LoginForm({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} type='password' validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox"/> Remember me
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