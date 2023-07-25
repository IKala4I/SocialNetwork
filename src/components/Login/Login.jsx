import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/validators";
import {Navigate} from "react-router-dom";
import classes from '../common/FormControls/FormControls.module.css'

function LoginForm({handleSubmit, error}) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} type='password'
                       validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type="checkbox"/> Remember me
            </div>
            {error && <div className={classes.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

function Login({isAuth, logIn}) {
    const onSubmit = (formData) => {
        logIn(formData)
    }

    if (isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {
    logIn
})(Login)