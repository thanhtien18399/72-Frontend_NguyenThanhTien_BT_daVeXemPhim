const initialState = {
    billList: [
    ],
}


const reducer = (currentState = initialState, action) => {
    //nhận action chỉnh sửa state hiện tại  
    // return state mới 
    switch (action.type) {
        case "UPDATE_BILL_LIST":
            const clonetestChair = [...currentState.billList]
            const find = (seats) => {
                let index = clonetestChair.findIndex((item) => {
                    if (item.seats === seats) {
                        return item.seats;
                    }
                })
                return index;
            }
            let index = find(action.payload.seats);
            if (index === -1) {
                clonetestChair.push(action.payload);
                console.log("index:" ,index,"data", clonetestChair);
            } else {
                clonetestChair.splice(index, 1);
                console.log("index:",index,"data :", clonetestChair);
            }
            console.log(clonetestChair);
            return { ...currentState, billList: clonetestChair };
        default:
            return currentState;
    }
}
export default reducer;