const initialstate = false

const themeReducer =(state=initialstate,action)=>{
    if (action.type=='change_theme') {
        return action.payload
    }
    return state
}
export default themeReducer