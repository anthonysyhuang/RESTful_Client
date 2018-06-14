import {connect} from 'react-redux'
import * as httpRequestAction from '../actions/HttpRequestAction'
import Main from './Main'


const mapStateToProps = (store) => {
    console.log(store);
    return {
        url: store.httpRequestReducer.url,
        method: store.httpRequestReducer.method,
        httpHeaders: store.httpRequestReducer.httpHeaders,
        httpBody: store.httpRequestReducer.httpBody,
        response: store.httpRequestReducer.response,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUrlUpdate: (url) => {
            console.log('onUrlUpdate', url)
            dispatch(httpRequestAction.updateUrl(url))
        },
        onMethodChange: (method) => {
            dispatch(httpRequestAction.updateMethod(method));
        },
        onBodyChange: (body) => {
            dispatch(httpRequestAction.updateBody(body));
        },
        onAddHeader: () => {
            dispatch(httpRequestAction.addHeader())
        },
        onUpdateHeader: (index, header) => {
            dispatch(httpRequestAction.updateHeader(index, header))
        },
        sendRequest: () => {
            return dispatch(httpRequestAction.fetch());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)