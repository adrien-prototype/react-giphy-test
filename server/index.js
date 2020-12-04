const express = require('express')
const app = express()
const server = require('http').createServer(app)
const axios = require('axios')
const cors = require('cors')

const clientId = 'nXWU6LPUTxopfCBO8zj9xv2D5VBtxgrt'

app.use(cors())
app.use(express.json())

app.get('/api/giphy', (req, res) => {

	const { q, limit } = req.query

	axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${clientId}&q=${q}&limit=${limit}`)
	.then(response => {
		console.log('')
		console.log('')
		console.log(response.data)
		console.log('')
		console.log('')
		return res.send(response.data)
	})
	.catch(err => {
		return res.send(err)
	})
})

const port = process.env.PORT || 8000
server.listen(port, () => console.log(`The server started on port ${port}`))


