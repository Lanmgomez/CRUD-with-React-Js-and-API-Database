import React from 'react'
import "./Home.css"
import InputMask from 'react-input-mask'
import {useState} from 'react'
// hook para o cep:  npm install react-hook-form
import {useForm} from 'react-hook-form'

const Home = () => {

  const [name, setName] = useState("")
  const [cpf, setCPF] = useState("")
  const [rg, setRG] = useState("")
  const [dataNas, setDataNas] = useState("")
  const [sex, setSex] = useState("")

  const {register, setValue} = useForm("")
  const [cep, setCEP] = useState("")
  const [address, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  
  const handleSubmit = (e) => {
    //e.preventDefault()
    console.log(e)

    const SaveDatas = {
      name, cpf, rg, dataNas, sex, cep, address, number, neighborhood, city, state
    }

    const save = fetch("http://localhost:5000/infos/", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(SaveDatas)
    })
  }

  const checkCEP = (e) => {
    e.preventDefault()
    const cep = e.target.value.replace(/\D/g, "")
    console.log(cep)

    fetch(`https://ws.apicep.com/cep/${cep}.json`)
      .then(res => res.json())
      .then(data => {console.log(data)
        setValue('address', data.address) 
        setValue('district', data.district)
        setValue('city', data.city)
        setValue('state', data.state) 
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='divFather'>
      <h1>Preencha seus dados:</h1>
        <form onSubmit={handleSubmit}>
          <div className='personalInfos'>
            <label>
              <span>Nome completo:</span>
                <input type="text" 
                       placeholder='Digite seu nome completo'
                       name='name'
                       onChange={(e) => setName(e.target.value)}
                       value={name}
                />
            </label>
            <label>
              <span>CPF:</span>
                <InputMask mask="999.999.999-99" 
                           placeholder='Digite seu CPF...'
                           name='cpf'
                           onChange={(e) => setCPF(e.target.value)}
                           value={cpf}
                />
            </label>
            <label>
              <span>RG:</span>
                <InputMask mask="99.999.999-9" 
                           placeholder='Digite seu RG...'
                           name='rg'
                           onChange={(e) => setRG(e.target.value)}
                           value={rg}
                />
            </label>
            <label>
              <span>Data de Nascimento:</span>
                <input type="date"
                       name='dataNas'
                       onChange={(e) => setDataNas(e.target.value)}
                       value={dataNas}
                />
            </label>
            <label>
                <label>Qual seu sexo?</label>
                  <span>Masculino
                    <input type="radio" 
                           name="sex"
                           onChange={(e) => setSex(e.target.value)}
                           value="masculino"
                     />
                  </span>
                  <span>Feminino
                    <input type="radio" 
                           name="sex" 
                           onChange={(e) => setSex(e.target.value)}
                           value="feminino"        
                    />
                  </span>
              </label>
          </div>
          <div className='personalInfos'>
            <label>
              <span>CEP:</span>
                <input type="text" 
                      name='cep'
                      {...register("cep")} 
                      onBlur={checkCEP}
                      onChange={(e) => setCEP(e.target.value)}
                      value={cep}      
                />
            </label>
            <label>
              <span>Rua:</span>
                <input type="text" 
                       {...register("address")} 
                        name="address"
                        onChange={(e) => setStreet(e.target.value)} 
                        value={address}   
                />
            </label>
            <label>
              <span>Número:</span>
                <input type="number"  
                       name='number'
                       onChange={(e) => setNumber(e.target.value)}
                       value={number}
                />
            </label>
            <label>
              <span>Bairro:</span>
                <input type="text" 
                      {...register("district")} 
                      name="neighborhood"
                      onChange={(e) => setNeighborhood(e.target.value)}
                      value={neighborhood}
                />
            </label>
            <label>
              <span>Cidade:</span>
                <input type="text" 
                       {...register("city")} 
                       name="city"
                       onChange={(e) => setCity(e.target.value)}
                       value={city} 
                />
            </label>
            <label>
              <span>Estado:</span>
                <input type="text" 
                      {...register("state")} 
                      name="state"
                      onChange={(e) => setState(e.target.value)}
                      value={state}     
                />
            </label>
          </div>
          <div className='btn'>
           <input type="submit" value="Salvar" />
          </div>
        </form>
    </div>
  )
}

export default Home