import * as tokenService from '../services/tokenService'

const BASE_URL = `http://localhost:3001/api/todos`

export async function getAll(){
  const res = await fetch(BASE_URL)
  return res.json()
}

export async function create(formData, id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
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

export async function update(formData, id) {
  const res = await fetch(`${BASE_URL}/${id}/update`, {
    method: 'PUT', 
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(formData)
  })
  const data =  await res.json()
  return data
}

export async function deleteTodos(id) {
  const res = await fetch(`${BASE_URL}/deleted/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }})
  return res.json()
} 


// export async function show(id) {
//   const res = await fetch(`${BASE_URL}/${id}`, {
//     method: 'GET', 
//     headers: {
//       'Authorization': `Bearer ${tokenService.getToken()}`,
//       'Content-Type': 'application/json'
//     }, 
//   })
//   const data =  await res.json()
//   return data
// }