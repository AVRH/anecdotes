const notification = 'This is a notification'

const reducer = (state = notification, action ) => {
    switch(action.type){
        case 'CHANGE':
          return state
        default:
          return state
    }
}

export default reducer 