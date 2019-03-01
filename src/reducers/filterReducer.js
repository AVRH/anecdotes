const initialState = ''

export const changeFilter = (filter) => {
    return({
        type: 'FILTER',
        data: {
            filter
        }
    })
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FILTER':
          console.log(action.data.filter)
          return action.data.filter
        default:
          return state
    }
} 
export default reducer