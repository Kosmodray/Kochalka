import reducers from '../reducers/index.js'
import {createStore} from 'redux'

const store = createStore(
    reducers
)

export default store