import gql from 'graphql-tag'

const GET_SPECIFIC_AUTHOR = gql`
    query getSpecificAuthor {
    author(id: "98467d0f-a235-4997-93d2-100403f8ba7b"){
    firstName
    lastName
    email
    address{
      street
    }
  }
}
`

const GET_ALL_AUTHORS = gql`
    query allAuthors{
  allAuthors {
    firstName
    lastName
    email
  }
}
`
export { GET_SPECIFIC_AUTHOR, GET_ALL_AUTHORS }
