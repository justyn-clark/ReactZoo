import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeAnimal } from '../actions/animals'

const Animal = ({ id, name, date, cost, description, species,  dispatch }) => (
  <div>
    <h4 className='name'>{name}</h4>
    <p><span>Species:</span> {species}</p>
    <p><span>Date:</span> {date}</p>
    {cost && <p><span>Maintenance Cost:</span> {cost}</p>}
    {description &&
    <p><span>Description: </span>
    {description}</p>}
    <div className='btn-wrap'>
      <button className={`btn`} onClick={() => {
        dispatch(removeAnimal({ id }))
      }}>Remove</button>
    <Link className='btn' to={`/animal/${id}`}>Edit</Link>
    </div>
  </div>
)

export default connect()(Animal)
