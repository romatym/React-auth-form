import React from 'react'
import countries from '../data/countries'
import cities from '../data/cities'

export default class AvatarStep extends React.Component {
  getCountryById = countryId => {
    if (!countryId) {
      return ''
    }

    return countries.find(item => {
      return item.id === parseInt(countryId)
    }).name
  }

  getCityById = id => {
    if (!id) {
      return ''
    }
    return cities[id].name
  }

  render() {
    const { values } = this.props

    return (
      <fieldset>
        <dl className="row">
          <div>
            <img
              className="img-thumbnail rounded"
              width="120px"
              height="120px"
              src={values.avatar}
              alt=""
            />
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4>
              {values.firstName} {values.lastName}
            </h4>
          </div>
        </dl>

        <dl className="row">
          <dt className="col-sm-3">Email:</dt>
          <dd className="col-sm-9">
            <p>{values.email}</p>
          </dd>
          <dt className="col-sm-3">Mobile:</dt>
          <dd className="col-sm-9">
            <p>{values.mobile}</p>
          </dd>
          <dt className="col-sm-3">Location:</dt>
          <dd className="col-sm-9">
            <p>
              {this.getCountryById(values.country)},
              {this.getCityById(values.city)}
            </p>
          </dd>
        </dl>
      </fieldset>
    )
  }
}
