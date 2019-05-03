import { createAction } from 'redux-actions'

const Roll = createAction('Roll', () => Math.floor(Math.random()*100))
const Done = createAction('Done')
const Clear = createAction('Clear')
const SetName = createAction('SetName')
const ChangeType = createAction('ChangeType')

export default {
    Roll,
    Done,
    Clear,
    SetName,
    ChangeType
}