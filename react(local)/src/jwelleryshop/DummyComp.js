import React from 'react'
import { Outlet } from 'react-router-dom'

const DummyComp = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default DummyComp
