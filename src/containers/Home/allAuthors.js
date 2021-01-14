import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { GET_ALL_AUTHORS }from './graphql'

const Authors = () => {
    const [allAuthors, {data: allData, loading: allLoading, called: allCalled, error: allError }] = useLazyQuery(GET_ALL_AUTHORS)
    if (allError) {
        throw new Error('get all authors query failed')
    }
    if (allLoading) return <p>Loading all Authors...</p>
    if (!allCalled) return <button type="button" onClick={allAuthors}>Click me to get all the authors!</button>

    return (
        <>
        <h1>All Authors!</h1>
        {allData.allAuthors.map(author => (
            <>
                <h2>{author.firstName} {author.lastName}</h2>
                <h3>{author.email}</h3>
            </>
            ))}
        </>
    )
}

export default Authors

