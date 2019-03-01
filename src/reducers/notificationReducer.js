const notification = 'This is a notification'

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
          return null
    }
}

export default reducer 