
const SEND_LOGS = 'tracker/send_logs';
const CLEAR_LOGS = 'tracker/CLEAR_LOGS'

const initState = {
  logs: [
    {
      'name': 'test1'
    },
    {
      'name': 'test2'
    }
  ],
  sending: false,
  error: null
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case SEND_LOGS:
            return {
              ...state,
              sending: true,
            }
        case CLEAR_LOGS:
            return {
                ...state,
                logs: []
            }
        default:
            return state;
    }
}

export function sendLogs(dispatch) {
    return (dispatch, getState) => {
        const { logsReducer: { logs } } = getState();
        console.log(logs)
        dispatch({
          type: SEND_LOGS
        });
    };
}