import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPerson = person => {
    const request = axios.post(baseUrl,person)
    return request.then(response => response.data)
}

const deletePerson = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAllPersons, createPerson, deletePerson }