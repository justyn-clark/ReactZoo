import uuid from 'uuid'

export const addAnimal = ({ name = '', species = '', cost = '', isBigger = '', description = '', date = 0} = {}) => ({
    type: 'ADD_ANIMAL',
    animal: {
        id: uuid(),
        name,
        species,
        cost,
        isBigger,
        description,
        date
    }
})

export const editAnimal = (id, updates) => ({
  type: 'EDIT_ANIMAL',
  id,
  updates
});

export const removeAnimal = ({ id } = {}) => ({
    type: 'REMOVE_ANIMAL',
    id
})
