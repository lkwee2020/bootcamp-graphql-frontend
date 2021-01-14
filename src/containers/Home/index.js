import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { GET_SPECIFIC_AUTHOR } from "./graphql"

const Home = () => {
  const [author, {
    data, loading, called, error,
  }] = useLazyQuery(GET_SPECIFIC_AUTHOR)
  if (error) {
    throw new Error('get specific author query failed')
  }
  if (loading) return <p>Loading Specific ...</p>
  if (!called) return <button type="button" onClick={author}>Click me to get a specific author!</button>
  const { firstName, lastName, email } = data.author

  return (
    <>
    <h1>{firstName} {lastName}</h1>
    <h2>{email}</h2>
    </>
  )
}


export default Home
