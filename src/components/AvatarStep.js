import React from 'react'
import defaultAvatar from '../img/default-avatar.png'

export default class AvatarStep extends React.Component {
  render() {
    const { values, errors, onChangeAvatar } = this.props

    return (
      <fieldset>
        <div className="form-group">
          <div className="mb-4">
            <img
              className="img-thumbnail rounded"
              width="100%"
              src={values.avatar === '' ? defaultAvatar : values.avatar}
              alt=""
            />
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="avatar"
                name="avatar"
                onChange={onChangeAvatar}
              />
              {errors.avatar && (
                <div className="invalid-feedback">{errors.avatar}</div>
              )}
              <label className="custom-file-label" htmlFor="avatar">
                Choose avatar
              </label>
            </div>
          </div>
        </div>
      </fieldset>
    )
  }
}
