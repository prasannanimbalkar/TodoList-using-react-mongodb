// import express from 'express';
import app from './api/app.js';
// const app = express()
const port = 4000




// server configurations....
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})