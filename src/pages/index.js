import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default () => (
    <Layout>
    <h1>
        Log in to app to access data
    </h1>
    <Link to="/dashboard">Go to dashboard </Link>
    </Layout>
)