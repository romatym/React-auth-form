import React from 'react'
import InputField from './InputField'

export default class ContactsStep extends React.Component {
  render() {
    const { values, errors, onChange } = this.props

    return (
      <fieldset className="form-group">
        <InputField
          id="firstName"
          labelText="firstName"
          className="form-control"
          type="text"
          placeholder="Enter Firstname"
          name="firstName"
          value={values.firstName}
          onChange={onChange}
          error={errors.firstName}
        />
        <InputField
          id="lastName"
          labelText="lastName"
          className="form-control"
          type="text"
          placeholder="Enter Lastname"
          name="lastName"
          value={values.lastName}
          onChange={onChange}
          error={errors.lastName}
        />
        <InputField
          id="password"
          labelText="Password"
          className="form-control"
          type="password"
          placeholder="Enter password"
          name="password"
          value={values.password}
          onChange={onChange}
          error={errors.password}
        />
        <InputField
          id="repeatPassword"
          labelText="Username"
          className="form-control"
          type="password"
          placeholder="repeat password"
          name="repeatPassword"
          value={values.repeatPassword}
          onChange={onChange}
          error={errors.repeatPassword}
        />

        <div>Gender</div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={values.gender === 'male'}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="male">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={values.gender === 'female'}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor="female">
            Female
          </label>
        </div>
      </fieldset>
    )
  }
}
