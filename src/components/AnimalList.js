import React from 'react'
import { connect } from 'react-redux'
import Animal from './Animal'
import getVisibleAnimals from '../selectors/animals'

const AnimalList = (props) => (
    <div>
        <ul>
            {props.animals.map(animal => {
                return (
                    <li className={`item`} key={animal.id}>
                        <Animal {...animal} />
                    </li>
                )
            })}
        </ul>
    </div>
)

const mapStateToProps = (state) => {
    return {
        animals: getVisibleAnimals(state.animals, state.filters)
    }
}

export default connect(mapStateToProps)(AnimalList)
