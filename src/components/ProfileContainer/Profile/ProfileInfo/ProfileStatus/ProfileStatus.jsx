import {useEffect, useState} from "react"

function ProfileStatus(props) {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        if (status !== props.status)
            setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
            {editMode
                ?
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                           value={status}
                    />
                </div>
                :
                <div>
                        <span onDoubleClick={activateEditMode}>
                            {status || '-----'}
                        </span>
                </div>
            }
        </div>
    )
}

export default ProfileStatus