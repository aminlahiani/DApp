import React from 'react'
import { BlogList } from './sections/BlogList'
import { Hero } from './sections/Hero'

function index() {
    return (
        <div>
            <Hero/>
            <BlogList/>
        </div>
    )
}

export default index
