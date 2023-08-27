import {InjectedFormProps, reduxForm} from "redux-form"
import {createField, GetStringKeys, Input} from "../../common/FormControls/FormControls"
import {required} from "../../../utils/validators"
import classes from "../../common/FormControls/FormControls.module.css"
import {FC} from 'react'
import {LoginBodyType} from '../../../redux/reducers/auth-reducer/auth-reducer'

type LoginFormOwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginBodyType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = ({
                                                                                                      handleSubmit,
                                                                                                      error,
                                                                                                      captchaUrl
                                                                                                  }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>("Email", "email", [required], Input)}
            {createField<LoginFormValuesTypeKeys>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
            {captchaUrl && createField<LoginFormValuesTypeKeys>("Symbols from image", "captcha", [required], Input, {})}


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

type LoginFormValuesTypeKeys = GetStringKeys<LoginBodyType>

export default reduxForm<LoginBodyType, LoginFormOwnPropsType>({
    form: 'login'
})(LoginForm)