const notification = ''

export const setNotification = (notification, time) => {
  return dispatch => {
    dispatch(changeNotification(notification))
    setTimeout(() => {
      dispatch(removeNotification())
    }, time)
  }
}
export const changeNotification = (notification) => {
  return({
    type: 'CHANGE',
    data:{
      notification
    }
  })
}
export const removeNotification = () => {
  return({
    type: 'REMOVE'
  })
}
const reducer = (state = notification, action ) => {
    switch(action.type){
        case 'CHANGE':
          return action.data.notification
        case 'REMOVE':
          return ''
        default:
          return state
    }
}

export default reducer 