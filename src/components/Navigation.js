import React from 'react'

const Navigation = props => {
  const { page, nextPage, prevPage } = props

  if (page < 4) {
    return (
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-light mr-4"
          disabled={page === 1}
          onClick={prevPage}
        >
          Previous
        </button>
        <button type="button" className="btn btn-secondary" onClick={nextPage}>
          Next
        </button>
      </div>
    )
  }

  if (page === 4) {
    return (
      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-secondary">
          Reset
        </button>
      </div>
    )
  }
}

export default Navigation
