import { createAction } from 'redux-actions'

const roll = createAction('roll', () => Math.floor(Math.random()*100))
const done = createAction('done')
const clear = createAction('clear')
const setName = createAction('setName')
const changeType = createAction('changeType')

export default {
    roll,
    done,
    clear,
    setName,
    changeType
}