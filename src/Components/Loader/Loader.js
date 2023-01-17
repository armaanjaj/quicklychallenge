import React from 'react'

function Loader() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center position-absolute vh-100 vw-100 bg-white opacity-50"
    style={{zIndex: 999}}
    data-testid="loader-component"
    >
        <div className="spinner-border container" role="status">
            <span className="sr-only"></span>
        </div>
    </div>
  )
}

export default Loader
