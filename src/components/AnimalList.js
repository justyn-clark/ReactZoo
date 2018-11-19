import React from 'react'
import { connect } from 'react-redux'
import Animal from './Animal'

const AnimalList = (props) => (
    <div>
        <ul>
            {props.animals.map(animal => {
                return (
                    <li className='item' key={animal.id}>
                        <Animal {...animal} />
                    </li>
                )
            }).reverse()}
        </ul>
    </div>
)

const mapStateToProps = (state) => {
    return {
        animals: state.animals
    }
}

export default connect(mapStateToProps)(AnimalList)
