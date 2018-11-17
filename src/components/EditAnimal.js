import React from 'react'
import AnimalForm from './AnimalForm'
import { connect } from 'react-redux'
import { editAnimal } from '../actions/animals'

const EditAnimal = (props) => (
  <div>
    <AnimalForm
      animal={props.animal}
      handleSubmitAnimal={(animal) => {
        props.dispatch(editAnimal(props.animal.id, animal))
        props.history.push('/')
      }}
    />
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    animal: state.animals.find((animal) =>
      animal.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditAnimal)
