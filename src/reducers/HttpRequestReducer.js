const initialState = {
    url: '',
    method: 'GET',
    httpHeaders: [{}],
    httpBody: '',
    response: null
}

export default function(state = initialState, action){

    switch (action.type){
        case 'UPDATE_URL': {
            return {...state, url: action.payload}
        }
        case 'UPDATE_METHOD': {
            return {...state, method: action.payload}
        }
        case 'ADD_HEADER': {
            const headers = state.httpHeaders.map(x => x);
            headers.push({});
            return {...state, httpHeaders: headers}
        }
        case 'UPDATE_HEADER': {
            console.log(action.payload);
            const headers = state.httpHeaders.map(x => x);
            headers[action.payload] = action.header; 
            return {...state, httpHeaders: headers}
        }
        case 'UPDATE_BODY': {
            return {...state, httpBody: action.payload}
        }
        case 'RECEIVE_RESPONSE': {
            return {...state, response: action.payload}
        }
        default:
        return {...state};
    }
}