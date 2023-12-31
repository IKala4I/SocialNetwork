import formControlsClasses from "../../../../common/FormControls/FormControls.module.css";
import {createField, GetStringKeys, Input, Textarea} from "../../../../common/FormControls/FormControls";
import classes from "../ProfileInfo.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../../../../../redux/reducers/profile-reducer/profile-reducer";
import {FC} from "react";

type ProfileDataFormOwnPropsType = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: FC<InjectedFormProps<ProfileType, ProfileDataFormOwnPropsType> & ProfileDataFormOwnPropsType> = ({
                                                                                                                            handleSubmit,
                                                                                                                            profile,
                                                                                                                            error
                                                                                                                        }) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={formControlsClasses.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField<ProfileTypeKeys>("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a
                job</b>: {createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>

        <div>
            <b>My professional skills</b>:
            {createField<ProfileTypeKeys>("My professional skills", "lookingForAJobDescription", [], Textarea)}
        </div>


        <div>
            <b>About me</b>:
            {createField<ProfileTypeKeys>("About me", "aboutMe", [], Textarea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={classes.contact}>
                <b>{key}: {createField<ProfileTypeKeys>(key, "contacts." + key as keyof ProfileType, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

export default reduxForm<ProfileType, ProfileDataFormOwnPropsType>({form: 'edit-profile'})(ProfileDataForm)