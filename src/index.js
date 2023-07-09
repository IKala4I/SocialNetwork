import {rerenderApp} from "./render";
import state, {addPost, onPostTextChange} from "./redux/state";

rerenderApp(state, addPost, onPostTextChange)