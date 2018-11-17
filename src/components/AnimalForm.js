import React, { Component } from 'react'
import Select from 'react-select'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'
import { formatDate, parseDate } from 'react-day-picker/moment'

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
    marginBottom: '1em',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1)'
  }),
  input: styles => ({ ...styles, boxShadow: 'none', height: '45px', width: '0'}),
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
      nameError: '',
      speciesError: '',
      dateError: '',
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
  }

  handelSpeciesChange = (species) => {
    this.setState({species: species.value})
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
    if (!this.state.name || !this.state.speciesError || !this.state.selectedDay) {
      this.setState(() => ({
        error: 'Please fill out all fields',
        nameError: 'Please fill in name',
        speciesError: 'Please select Species',
        dateError: 'Please select a date'
      }))
    } else {
      this.setState(() => ({
        error: '',
        nameError: '',
        speciesError: '',
        dateError: ''
      }))
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
        <form onSubmit={this.handleSubmit} className='add-animal-form'>
          <input className={'name'}
                 type="text"
                 placeholder="Name"
                 autoFocus
                 value={this.state.name}
                 onChange={this.handleNameChange} />
          {this.state.nameError && !this.state.name && <p className='error'>{this.state.nameError}</p>}
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
          {this.state.speciesError && !this.state.species && <p className='error'>{this.state.speciesError}</p>}
          <p className={'error'}>
            {!this.state.isEmpty && !this.state.selectedDay && 'This day is invalid'}
            {this.state.selectedDay && this.state.isDisabled && 'This day is disabled'}
          </p>
          <DayPickerInput
            value={this.state.selectedDay}
            onDayChange={this.handleDayChange}
            formatDate={formatDate}
            parseDate={parseDate}
            placeholder={`Type MM/DD/YYYY or Pick Date`}
            dayPickerProps={{
              selectedDays: this.state.selectedDay,
              disabledDays: {
                daysOfWeek: [0, 6],
              },
            }}
          />
          {this.state.dateError && !this.state.selectedDay && <p className='error'>{this.state.dateError}</p>}
          <label className="chk-wrap">
            Bigger than a breadbox?:
            <input
              name="isBigger"
              type="checkbox"
              checked={this.state.isBigger}
              onChange={this.handleInputChange} />
            <span className="checkmark"></span>
          </label>

          <p className={'maintenance'}>
            {this.state.isBigger && `Maintenance Cost: $${20}` }
          </p>
          <textarea className={'desc'}
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange} />
          <div className={'add-btn-wrap'}>
            <button
              className={`btn add`}>Add</button>
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
