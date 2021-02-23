/* eslint-disable import/no-anonymous-default-export */
export default function (state = {}, action) {
    switch (action.type) {
        case "Add_CabRate":
            return {
                ...state,
                success: action.payload
            };
        case "Get_All_Rates":
            return {
                ...state,
                fare: action.payload,
                deletedrate: false
            };
        case "Delete_Rate":
            return {
                ...state,
                deletedrate: action.payload
            }
        case "Get_Bookings":
            return {
                ...state,
                bookings: action.payload
            }
        default:
            return state

    }
}     