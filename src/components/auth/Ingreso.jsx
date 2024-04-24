import React from 'react'
import {useState} from 'react'
import {initDataBase} from '../../config/firebaseConfig'
import {collection,getDocs,deleteDoc} from 'firebase/firestore'

const Ingreso = () => {
    const [email,setEmail]=useState("")
    const [usuario,setUsuario]=useState("")
    const [password,setPassword]=useState("")
    const [users,setUsers]=useState([])

    
    
    async function consultarUsuarios(){
        let collectionUsuarios= collection(initDataBase,'Usuarios')
        let resultado = await getDocs(collectionUsuarios)
        let infoUsuarios= resultado.docs
        console.log(collectionUsuarios)
        console.log(infoUsuarios.map((doc)=>({...doc.data()})))
     }
     consultarUsuarios()
    function buscarUsuario(){

    }
    function iniciarsesion(){
        console.log(email,password)
    }
  return (
    <form>
      <input onChange= {(e)=> setEmail (e.target.value)}
      placeholder='Usuario' 
      type="text" 
      name="" 
      id="" />

      <input onChange= {(e)=> setEmail (e.target.value)}
      placeholder='Correo' 
      type="text" 
      name="" 
      id="" />

      <input onChange= {(e)=> setPassword (e.target.value)} 
      placeholder='Contraseña'
       type="text" 
       name="" 
       id="" />

      <input onClick={iniciarsesion} 
      type="button"
       value="Iniciar Sesion"
        name=""
         id="" />
    </form>
  )
}

export default Ingreso
