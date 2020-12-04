import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {

const [query, setQuery] = useState('fintech')
const [limit, setLimit] = useState(5)
const [giphies, setGiphies] = useState([])

const fetchGiph = () => {

  // const body = JSON.stringify({ })
  axios.get(`http://localhost:8000/api/giphy?q=${query}&limit=${limit}`)
  .then(res => {
    console.log(res.data.data)
    setGiphies(res.data.data)
  })
}

  useEffect(() => {
    fetchGiph(query, limit)
  }, [])

  return (
    <div className="App">
      <h1>Very Useful Giphy Search Engine</h1>
      <input
        placeholder='Fintech'
        type='search'
        onChange={e => setQuery(e.target.value)}
      />
      <button
        onClick={fetchGiph}
      >
        Search
      </button>
      <div className='giphies'>
        {
          giphies.map(giphy => (
            <img
              className='giphy'
              key={giphy.id}
              src={giphy.images.downsized_medium.url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App