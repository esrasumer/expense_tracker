import { User, UserState, UserAction } from "../../types/user";

const defaultState: UserState = {
    data: {} as User,
    loading: false,
    error: ""
}

const userReducer =(state: UserState, action: UserAction) => {
    return state;
}

export default userReducer;