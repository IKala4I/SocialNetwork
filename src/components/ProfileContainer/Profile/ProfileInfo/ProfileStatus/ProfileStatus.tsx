import {FC, useEffect, useState} from "react"

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}
const ProfileStatus: FC<ProfileStatusPropsType> = ({status, updateStatus}) => {

    let [editMode, setEditMode] = useState(false)
    let [stateStatus, setStateStatus] = useState(status)

    useEffect(() => {
        if (stateStatus !== status)
            setStateStatus(status)
    }, [status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        updateStatus(stateStatus)
    }

    const onStatusChange = (e: any) => {
        setStateStatus(e.currentTarget.value)
    }


    return (
        <div>
            {editMode
                ?
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                           value={stateStatus}
                    />
                </div>
                :
                <div>
                        <span onDoubleClick={activateEditMode}>
                            {stateStatus || '-----'}
                        </span>
                </div>
            }
        </div>
    )
}

export default ProfileStatus