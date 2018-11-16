const animalReducerDefaultState = []

export default (state = animalReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_ANIMAL':
            return [
                ...state,
                action.animal
            ]
        case 'EDIT_ANIMAL':
          return state.map((animal) => {
            if (animal.id === action.id) {
              return {
                ...animal,
                ...action.updates
              };
            } else {
              return animal
            }
          })
        case 'REMOVE_ANIMAL':
            return state.filter(({ id }) => id !== action.id)
        default:
            return state
    }
}
