import {Field, Form, Formik} from 'formik'
import React from 'react'
import {FilterType, usersActions} from "../../../redux/reducers/users-reducer/users-reducer";
import {useDispatch, useSelector} from 'react-redux'
import {getUsersFilter} from '../../../redux/selectors/users-selectors'
import {Dispatch} from 'redux'

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
}

type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
    term: string
    friend: FriendFormType
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = (props) => {
    const dispatch: Dispatch = useDispatch()
    const filter = useSelector(getUsersFilter)

    const initialValues: FormType = {term: filter.term, friend: String(filter.friend) as FriendFormType}
    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }

        dispatch(usersActions.setFilter(filter))
        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term"/>

                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}