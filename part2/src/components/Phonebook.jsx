import { useEffect, useState } from 'react'
import phonebookService from '../services/phonebook'

const Phonebook = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filteredName, setFilteredName] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const hook = () => {
    phonebookService
      .getAllPersons()
      .then(data => {
        setPersons(data)
        setFilteredPersons(data)
      })
  }
  useEffect(hook, [])


  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())){
      const newPerson = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
      }
      phonebookService
        .createPerson(newPerson)
        .then(data => {
          setPersons(persons.concat(data))
          setNewName('')
          setNewNumber('')
          setFilteredPersons(filteredPersons.concat(data))
        })
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterByName = (event) => {
    setFilteredName(event.target.value)
    if (event.target.value) {
      setFilteredPersons(persons.filter((person) => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
    } else{
      setFilteredPersons(persons)
    }
  }

  const deletePerson = (id) => {
    phonebookService
      .deletePerson(id)
      .then(data => {
        console.log('deleted')
        setFilteredPersons(filteredPersons.filter(person => person.id !== id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with <input value={filteredName} onChange={filterByName}/>
      </div>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
            <li key={person.id}>{person.name} - {person.number} <button onClick={() => deletePerson(person.id)}>Delete</button> </li>
        ))}
      </ul>
    </div>
  )
}

export default Phonebook