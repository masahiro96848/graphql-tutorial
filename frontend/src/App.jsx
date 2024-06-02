import { gql, useQuery } from '@apollo/client'
import './App.css'

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`

function BookComponent() {
  const { loading, error, data } = useQuery(BOOKS)
  console.log(data)

  if (loading) return <p>Loading...</p>
  if (error) return <p>エラー</p>

  return data.test.map((book, id) => (
    <div key={id}>
      <p>
        {book.author} : {book.title}
      </p>
    </div>
  ))
}

function App() {
  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      <BookComponent />
    </div>
  )
}

export default App
