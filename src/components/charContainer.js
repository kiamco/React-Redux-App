import React from 'react'

const Chararcters = ({ charObj }) => {
    return (
        <div className='letter'>
            <h1>{charObj.isShow ? charObj.char : ''}</h1>
        </div>
    )
}

export default Chararcters;