import axios from 'axios'

const http = axios.create({
  baseURL: 'https://localhost:4010',
  headers:{authorization: 'bearer 132'    
  }
})

export default http