import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeAnimal } from '../actions/animals'

const Animal = ({ id, name, description, species, date, dispatch }) => (
  <div>
    <h4 className={`name`}>{name}</h4>
    <p><span>Species:</span> {species}</p>
    <p><span>Date:</span> {date}</p>
    <p><span>Description: </span></p>
    {description && <p>{description}</p>}
    <div className={'btn-wrap'}>
      <button className={`btn`} onClick={() => {
        dispatch(removeAnimal({ id }))
      }}>Remove</button>
      <button className={`btn`}>
        <Link to={`/animal/${id}`}>Edit</Link>
      </button>
    </div>
  </div>
)

export default connect()(Animal)
