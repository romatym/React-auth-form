import React from 'react'

const Header = props => {
  const { page } = props

  return (
    <div className="steps mb-4">
      <div className={'step' + (page === 1 ? ' is-active' : '')}>
        <div className="step__marker">1</div>
        <div className="step__title mt-1">Basic</div>
      </div>
      <div className={'step' + (page === 2 ? ' is-active' : '')}>
        <div className="step__marker">2</div>
        <div className="step__title mt-1">Contacts</div>
      </div>
      <div className={'step' + (page === 3 ? ' is-active' : '')}>
        <div className="step__marker">3</div>
        <div className="step__title mt-1">Avatar</div>
      </div>
      <div className={'step' + (page === 4 ? ' is-active' : '')}>
        <div className="step__marker">4</div>
        <div className="step__title mt-1">Finish</div>
      </div>
    </div>
  )
}

export default Header
