import React, { useEffect, useState } from 'react'
import "./Projects.css"
import { Link } from 'react-router-dom'

const url = "http://localhost:5000/infos/"

const Projects = () => {

const [infos, setInfos] = useState([])

 console.log(infos)

useEffect(() => {
  const fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {console.log(data)
      setInfos(data)
  })
      .catch(err => console.log(err))
  }
  fetchData()
}, [])

const handleDelete = (id) => {
  fetch(`${url}${id}`, {
    method:"DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify()
  })
  setInfos(infos.filter((info) => info.id !== id))
}

  return (
    <div className='divProjects'>
     {infos.map((info) => (
        <ul key={info.id}>
          <li>Nome: {info.name}</li>
          <li>CPF: {info.cpf}</li>
          <li>RG: {info.rg}</li>
          <li>Data de Nascimento: {info.dataNas}</li>
          <li>Sexo: {info.sex}</li>
          <li>Cep: {info.cep}</li>
          <li>Endereço: {info.address}</li>
          <li>Número: {info.number}</li> 
          <li>Bairro: {info.neighborhood}</li>
          <li>Cidade: {info.city}</li>
          <li>Estado: {info.state}</li>
            <Link to={`/projectEdit/${info.id}`}>
              <input type="button" value="Editar" /> 
            </Link>  
              <input type="button" 
                     value="Excluir" 
                     onClick={() => handleDelete(info.id)}
              />
        </ul>
      ))}
    </div>
  )
}

export default Projects