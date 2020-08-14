import React from 'react'
import InputField from './InputField'
import countries from '../data/countries'
import cities from '../data/cities'

export default class ContactsStep extends React.Component {
  getCountries = items => {
    const countriesList = [...items]
    countriesList.unshift({ id: 0, name: 'Select country' })

    return countriesList.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ))
  }

  getCities = country => {
    if (!country) {
      return
    }

    const citiesList = Object.entries(cities)
      .filter(item => item[1].country === parseInt(country))
      .map(item => (
        <option key={item[0]} value={item[0]}>
          {item[1].name}
        </option>
      ))

    citiesList.unshift(
      <option key="0" value="Select city">
        Select city
      </option>
    )
    return citiesList
  }

  render() {
    const { values, errors, onChange } = this.props

    return (
      <fieldset className="form-group">
        <InputField
          id="email"
          labelText="Email"
          className="form-control"
          type="text"
          placeholder="email"
          name="email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
        />
        <InputField
          id="mobile"
          labelText="Mobile"
          className="form-control"
          type="text"
          placeholder="mobile"
          name="mobile"
          value={values.mobile}
          onChange={onChange}
          error={errors.mobile}
        />
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            className="form-control"
            id="country"
            name="country"
            value={values.country}
            onChange={onChange}
          >
            {this.getCountries(countries)}
          </select>
          {errors.country && (
            <div className="invalid-feedback">{errors.country}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className="form-control"
            id="city"
            name="city"
            value={values.city}
            onChange={onChange}
            error={errors.city}
          >
            {this.getCities(values.country)}
          </select>
          {errors.country && (
            <div className="invalid-feedback">{errors.country}</div>
          )}
        </div>
      </fieldset>
    )
  }
}
