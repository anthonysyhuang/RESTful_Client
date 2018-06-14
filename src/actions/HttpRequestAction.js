import axios from 'axios'


async function send(url, method, headers, body){
    
    headers['Content-Type'] = 'application/json';
    return axios.request({
        url,
        method,
        headers,
        data: body
    }).then( res => {
        return Promise.resolve(res);
    }).catch( err => {
        return Promise.reject(err.response);
    })
}
export function updateUrl(url) {
    return {
        type: 'UPDATE_URL',
        payload: url
    }
}
export function updateMethod(method) {
    return {
        type: 'UPDATE_METHOD',
        payload: method
    }
}
export function addHeader() {
    return {
        type: 'ADD_HEADER'
    }
}
export function updateHeader(index, header) {
    return {
        type: 'UPDATE_HEADER',
        payload: index,
        header: header
    }
}
export function updateBody(body) {
    return {
        type: 'UPDATE_BODY',
        payload: body
    }
}

export function fetch(){
    return (dispatch, getState) => {
        console.log(getState().httpRequestReducer);
        const url = getState().httpRequestReducer.url;
        const headersArr = getState().httpRequestReducer.httpHeaders;
        const body = getState().httpRequestReducer.httpBody;
        const method = getState().httpRequestReducer.method;

        const headers = {};
        headersArr.forEach(header => {
            if(header.key)
                headers[header.key] = header.value;
        })
        
        return send(url, method,headers, body)
                .then( (response) =>{
                    dispatch({
                        type: 'RECEIVE_RESPONSE',
                        payload: response
                    })
                })
                .catch( err => {
                    dispatch({
                        type: 'RECEIVE_RESPONSE',
                        payload: err
                    })
                })
    }
}