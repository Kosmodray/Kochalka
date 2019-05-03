import { handleActions } from 'redux-actions'

let initialState

if(localStorage['Sport']) {
    initialState = JSON.parse(localStorage['Sport'])
} else {
    initialState = {
        pushUps: {
            record: 0,
            quantity: 0
        },
        sitUps: {
            record: 0,
            quantity: 0
        },
        squats: {
            record: 0,
            quantity: 0
        },
        name: "",
        value: 0,
        type: "squats",
        doneClicked: true
   }
}

export default handleActions(
    {
        'roll': (state, action) => ({
            ...state,
            value: action.payload,
            doneClicked: false
        }),
  
        'done': (state, action) => {
            let type = state[state.type]
            let newObj = {...state}
            newObj[state.type] = {
                ...type,
                quantity: type.quantity+state.value,
                record: state.value>type.record ? state.value : type.record
            }
            newObj['doneClicked'] = true
            newObj['value'] = 0
            localStorage['Sport'] = JSON.stringify(newObj)
            return newObj
        },

        'clear': (state, action) => {
            delete localStorage['Sport']

            return {
                ...state,
                pushUps: {
                    quantity: 0,
                    record: 0
                },
                sitUps: {
                    quantity: 0,
                    record: 0
                },
                squats: {
                    quantity: 0,
                    record: 0
                },
                value: 0,
                name: ""
            }
        },
        'setName': (state, action) => ({
                ...state,
                name: action.payload
        }),
        
        'changeType': (state, action) => ({
            ...state,
            type: action.payload,
            value: 0,
            doneClicked: true
        })
    },
    initialState
)
