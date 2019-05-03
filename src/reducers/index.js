import { handleActions } from 'redux-actions'

let initialState

if(localStorage['Sport']) {
    initialState = JSON.parse(localStorage['Sport'])
} else {
    initialState = {
        PushUps: {
            Record: 0,
            Quantity: 0
        },
        SitUps: {
            Record: 0,
            Quantity: 0
        },
        Squats: {
            Record: 0,
            Quantity: 0
        },
        Name: "",
        Value: 0,
        Type: "Squats",
        DoneClicked: true
   }
}

export default handleActions(
    {
        'Roll': (state, action) => ({
            ...state,
            Value: action.payload,
            DoneClicked: false
        }),
  
        'Done': (state, action) => {
            let type = state[state.Type]
            let newObj = {...state}
            newObj[state.Type] = {
                ...type,
                Quantity: type.Quantity+state.Value,
                Record: state.Value>type.Record ? state.Value : type.Record
            }
            newObj['DoneClicked'] = true
            newObj['Value'] = 0
            localStorage['Sport'] = JSON.stringify(newObj)
            return newObj
        },

        'Clear': (state, action) => {
            delete localStorage['Sport']

            return {
                ...state,
                PushUps: {
                    Quantity: 0,
                    Record: 0
                },
                SitUps: {
                    Quantity: 0,
                    Record: 0
                },
                Squats: {
                    Quantity: 0,
                    Record: 0
                },
                Value: 0,
                Name: ""
            }
        },
        'SetName': (state, action) => ({
                ...state,
                Name: action.payload
        }),
        
        'ChangeType': (state, action) => ({
            ...state,
            Type: action.payload,
            Value: 0,
            DoneClicked: true
        })
    },
    initialState
)
