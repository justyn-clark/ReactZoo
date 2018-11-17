import React from 'react'
import AnimalForm from './AnimalForm'
import { connect } from 'react-redux'
import { addAnimal } from '../actions/animals'

const AddAnimal = (props) => (
  <div>
    <AnimalForm
      handleSubmitAnimal={(animal) => {
        props.dispatch(addAnimal(animal))
        props.history.push('/')
      }}
    />
  </div>
)

export default connect()(AddAnimal)
