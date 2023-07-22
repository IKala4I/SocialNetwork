import {Component} from "react";

class ProfileStatus extends Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }

    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
    }


    render() {
        return (
            <div>
                {this.state.editMode
                    ?
                    <div>
                        <input autoFocus onBlur={this.deactivateEditMode} value={this.props.aboutMe}/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.aboutMe}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus