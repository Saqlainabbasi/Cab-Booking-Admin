import axios from 'axios'
export const addRule = (data) => {
    const request = axios.post('/api/addRule', data)
        .then(response => response.data)
    return {
        type: "Add_Rule",
        payload: request
    }

}
export const getRules = () => {
    const request = axios.get('/api/getRules')
        .then(response => response.data)
    return {
        type: "Get_Rule",
        payload: request
    }
}
export const deleteRule = (id) => {
    const request = axios.delete(`/api/deleteRule?id=${id}`)
        .then(response => response.data)
    return {
        type: "Delete_Rule",
        payload: request
    }
}

export const addCabRate = (data) => {
    const request = axios.post('/api/addCabRate', data)
        .then(response => response.data)
    return {
        type: "Add_CabRate",
        payload: request
    }
}

export const getAllCabRate = () => {
    const request = axios.get('/api/getAllRates')
        .then(response => response.data)
    return {
        type: "Get_All_Rates",
        payload: request
    }
}

export const deleteRate = (id) => {
    const request = axios.delete(`/api/deleteRate?id=${id}`)
        .then(response => response.data)
    return {
        type: "Delete_Rate",
        payload: request
    }
}

export const getAllBookings = () => {
    const request = axios.get('/api/getBookings')
        .then(response => response.data)
    return {
        type: "Get_Bookings",
        payload: request
    }
}