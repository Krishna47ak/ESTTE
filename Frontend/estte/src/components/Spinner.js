import React from 'react'

const Spinner = () => {
    return (
        <div className="h-screen flex" >
            <img className="m-auto w-16" src={require("../assets/images/radar.gif")} alt='Loading...' />
        </div>
    )
}

export default Spinner