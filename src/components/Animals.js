import React from 'react'
import AnimalList from './AnimalList'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledNoItems = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: black;
  font-weight: 600;
  `;

const Animals = (props) => (
    <div className='container__list'>
      {!props.animals.length &&
      <StyledNoItems>
        <p>No Items Available</p>
      </StyledNoItems>}
      {props.animals && <AnimalList {...props}/>}
    </div>
)

const mapStateToProps = (state) => {
  return {
    animals: state.animals
  }
}

export default connect(mapStateToProps)(Animals)
