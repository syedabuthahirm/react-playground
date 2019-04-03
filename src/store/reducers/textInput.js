const UPDATE_NOTES = 'notes/UPDATE_NOTES'
const ADD_NOTES = 'notes/ADD_NOTES'

const initState = {
    input: {
        notes: new Set(),
        systemNotes: new Set()
    }
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case UPDATE_NOTES:
            const newInputs = { notes: new Set(action.notes) }
            const tmpInput = Object.assign({}, state.input, newInputs);
            return {
                ...state,
                input: tmpInput
            }
        case ADD_NOTES:
            return {
                ...state
            }
        default:
            return state;
    }
}

export function addNotes(oldData, newData) {
    const notes = "";
    return {
        type: ADD_NOTES,
        notes: notes
    }
}

export function updateNotes(newNotes) {
    return {
        type: UPDATE_NOTES,
        notes: newNotes
    }
}