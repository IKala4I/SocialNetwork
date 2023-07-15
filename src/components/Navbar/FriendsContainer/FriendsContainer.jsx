import Friends from "./Friends/Friends";
import {useContext} from "react";
import StoreContext from "../../../StoreContext";

function FriendsContainer() {
    const friends = useContext(StoreContext).getState().sidebar.friends

    return (
        <Friends friends={friends}/>
    );
}

export default FriendsContainer;