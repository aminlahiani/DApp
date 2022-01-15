import React from 'react'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Information } from './sections/Information'

function index() {
    return (
        <div>
            <Hero/>
            <Services/>
            <Information/>
        </div>
    )
}

export default index
