const initialState={
    chairList:[],
}
const reducer=(currentState=initialState,action)=>{
    //nhận action chỉnh sửa state hiện tại  
    // return state mới 
    switch (action.type) {
        case "UPDATE_CHAIR_LIST":
            
            currentState.chairList=action.payload
            return {...currentState}
        default:
            return currentState;
    }
}
export default reducer;