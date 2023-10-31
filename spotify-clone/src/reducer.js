export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    //'BQAzfJ-PzndGn1wAdmvLG1vseiPH1uZZuVOhWUTShK7a_t_m9n…ROCe2UDjXUunpGbwkdW9on4l15wfW-Cx7942P0pBP29zZzfWw'
}


//reducer takes 2 params
const reducer = (state,action) => {
    
    //Action -> type, [payload]

    //a reducers main purpose is to listen for events/actions

    switch(action.type){
        //first case the action.type listens for a set_user action
        case'SET_USER':

            return{
                //...state keeps the original state and then changes it to the new state of the user
                ...state, user:action.user
            }
        
        case'SET_TOKEN':
            return{
                ...state, token:action.token
            }
            //important to add a default if an unknown action is passed. this will prevent the app from breaking
        default:
            return state

    }
}

export default reducer;