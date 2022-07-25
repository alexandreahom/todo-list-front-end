import * as tokenService from '../services/tokenService'

const BASE_URL = `http://localhost:3001/api/todos`

// export async function getAll(){
//   const res = await fetch(BASE_URL)
//   return res.json()
// }

export async function create(formData) {
  // console.log(todo)
  const res = await fetch(BASE_URL, {
    method: 'POST', 
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(formData)
  })
  const data =  await res.json()
  return data
}