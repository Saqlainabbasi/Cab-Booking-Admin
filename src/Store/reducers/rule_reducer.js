/* eslint-disable import/no-anonymous-default-export */
export default function (state = {}, action) {
    switch (action.type) {
        case "Add_Rule":
            return {
                ...state,
                success: action.payload
            };

        case "Get_Rule":
            return {
                ...state,
                rule: action.payload,
                deletedrule: false
            };
        case "Delete_Rule":
            return {
                ...state,
                deletedrule: action.payload
            }
        default:
            return state

    }
}     