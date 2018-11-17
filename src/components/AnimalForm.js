import React, { Component } from 'react'
import Select from 'react-select'
import moment from "moment"
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

const options = [
  { value: 'chimpanzee', label: 'Chimpanzee' },
  { value: 'lion', label: 'Lion' },
  { value: 'zebra', label: 'Zebra' },
  { value: 'hippopotamus', label: 'Hippopotamus' },
  { value: 'seal', label: 'Seal' }
]

const colorStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    border: 'none',
    height: '45px',
    color: 'black',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1)'
  }),
  input: styles => ({ ...styles, boxShadow: 'none', height: '45px', width: '0' }),
  placeholder: styles => ({ ...styles, color: 'grey', fontWeight:'300' }),
  select: styles => ({ ...styles, border: 'black' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? '#f6f6f6' : isFocused ? '#f6f6f6' : null,
      color: isDisabled
        ? '#f6f6f6'
        : isSelected
          ? 'black' ? 'black' : 'white'
          : 'grey',
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
}

export default class AnimalForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.animal ? props.animal.name : '',
      species: props.animal ? props.animal.species : '',
      description: props.animal ? props.animal.description : '',
      date: props.animal ? props.animal.date : 0,
      error: '',
      selectedDay: undefined,
      isEmpty: true,
      isDisabled: false,
      isBigger: false,
    }

    this.baseState = this.state
  }



  handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput()
    this.setState({
      selectedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true
    })
    console.log(`${formatDate(selectedDay)}`)
  }

  handelSpeciesChange = (species) => {
    this.setState({species: species.value})
    console.log(`Option selected:`, species.value)
  }

  handleNameChange = (e) => {
    const name = e.target.value
    this.setState(() => ({ name: name }))
  }

  handleDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description: description }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.name || !this.state.selectedDay) {
      this.setState(() => ({ error: 'Please set name & species & date!' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.handleSubmitAnimal({
        name: this.state.name,
        species: this.state.species,
        description: this.state.description,
        date: `${formatDate(this.state.selectedDay)}`
      })
    }
  }

  handelResetForm = () => {
    this.setState(this.baseState)
  }

  render() {
    return (
      <div>
        {this.state.error && <p className='error'>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit} className='add-animal-form'>
          <input className={'name'}
                 type="text"
                 placeholder="Name"
                 autoFocus
                 value={this.state.name}
                 onChange={this.handleNameChange} />
          <Select
            value={this.state.species.value}
            onChange={this.handelSpeciesChange}
            options={options}
            styles={colorStyles}
            placeholder={'Select Species'}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              height: '45px',
              colors: {
                ...theme.colors,
                primary25: 'grey',
                primary: 'grey',
              },
            })}
          />
          <p className={'date-validation'}>
            {/*{this.state.isEmpty && 'Please type or pick a day'}*/}
            {!this.state.isEmpty && !this.state.selectedDay && 'This day is invalid'}
            {this.state.selectedDay && this.state.isDisabled && 'This day is disabled'}
            {/*{this.state.selectedDay && !this.state.isDisabled && `You chose ${this.state.selectedDay.toLocaleDateString()}`}*/}
          </p>
          <DayPickerInput
            value={this.state.selectedDay}
            onDayChange={this.handleDayChange}
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={`Type MM/DD/YYYY or Pick Date` /*`${formatDate(new Date())}`*/}
            dayPickerProps={{
              selectedDays: this.state.selectedDay,
              disabledDays: {
                daysOfWeek: [0, 6],
              },
            }}
          />
          <label>
            Bigger than a breadbox?:
            <input
              name="isBigger"
              type="checkbox"
              checked={this.state.isBigger}
              onChange={this.handleInputChange} />
          </label>
          <p className={'date-validation'}>
            {this.state.isBigger && 'You need to pay extra foo!'}
          </p>
          <textarea className={'desc'}
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange} />
          <div className={'add-btn-wrap'}>
            <button
              className={`btn`}>Add</button>
            <button
              className={`btn`}
              onClick={this.handelResetForm}
              type="button">Cancel</button>
          </div>

        </form>
      </div>
    )
  }
}
