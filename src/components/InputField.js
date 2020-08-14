import React from 'react'

const InputField = props => {
  const {
    id,
    labelText,
    type,
    className,
    placeholder,
    name,
    value,
    onChange,
    error,
  } = props

  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error ? <div className="invalid-feedback">{error}</div> : null}
    </div>
  )
}

export default InputField
