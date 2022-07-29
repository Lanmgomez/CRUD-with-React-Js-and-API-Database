import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ProjectEdit = () => {

   const {id} = useParams()

    const [infos, setInfos] = useState([])
    const [name, setName] = useState(infos.name)
    const [cpf, setCPF] = useState(infos.cpf)
    const [rg, setRG] = useState(infos.rg)
    const [dataNas, setDataNas] = useState(infos.dataNas)
    const [sex, setSex] = useState(infos.sex)
    const [cep, setCEP] = useState(infos.cep)
    const [address, setStreet] = useState(infos.address)
    const [number, setNumber] = useState(infos.number)
    const [neighborhood, setNeighborhood] = useState(infos.neighborhood)
    const [city, setCity] = useState(infos.city)
    const [state, setState] = useState(infos.state)

    useEffect(() => {
      fetch(`http://localhost:5000/infos/${id}`, {
          method:"GET",
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then((res) => res.json())
      .then((data) => {setInfos(data)})
      .catch(err => console.log(err))
  }, [id])

const handleEdit = (e) => {

  const SaveDatas = {
    name, cpf, rg, dataNas, sex, cep, address, number, neighborhood, city, state
  }

    fetch(`http://localhost:5000/infos/${id}`, {
      method:"PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(SaveDatas)
    })
}

  return (
    <div> Edite as Informações:
        <form onSubmit={handleEdit}>
        <ul key={infos.id}>
                <li>
                  <b>Nome:</b> 
                  <input type="text" name='name' defaultValue={infos.name} onChange={(e) => setName(e.target.value)}/>
                </li>
                <li>
                  <b>CPF:</b> 
                  <input type="text" name='cpf' defaultValue={infos.cpf} onChange={(e) => setCPF(e.target.value)}/>
                </li>
                <li>
                  <b>RG:</b> 
                  <input type="text" name='rg' defaultValue={infos.rg} onChange={(e) => setRG(e.target.value)}/>
                </li>
                <li>
                  <b>Data de Nascimento:</b> 
                  <input type="text" name="dataNas" defaultValue= {infos.dataNas} onChange={(e) => setDataNas(e.target.value)}/>
                </li>
                <li>
                  <b>Sexo:</b> 
                  <input type="text" name='sex' defaultValue={infos.sex} onChange={(e) => setSex(e.target.value)}/>
                </li>
                <li>
                  <b>Cep:</b> 
                  <input type="text" name='cep' defaultValue={infos.cep} onChange={(e) => setCEP(e.target.value)}/>
                </li>
                <li>
                  <b>Endereço:</b> 
                  <input type="text" name='address' defaultValue={infos.address} onChange={(e) => setStreet(e.target.value)}/>
                </li>
                <li>
                  <b>Número:</b> 
                  <input type="text" name='number' defaultValue={infos.number} onChange={(e) => setNumber(e.target.value)}/>
                </li> 
                <li>
                  <b>Bairro:</b> 
                  <input type="text" name='neighborhood' defaultValue={infos.neighborhood} onChange={(e) => setNeighborhood(e.target.value)}/>
                </li>
                <li>
                  <b>Cidade:</b> 
                  <input type="text" name='city' defaultValue={infos.city} onChange={(e) => setCity(e.target.value)}/>
                </li>
                <li>
                  <b>Estado:</b> 
                  <input type="text" name='state' defaultValue={infos.state} onChange={(e) => setState(e.target.value)}/>
                </li>
                <input type="submit" value="Salvar"/>
            </ul>
        </form>
    </div>
  )
}

export default ProjectEdit