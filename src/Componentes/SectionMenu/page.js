import styles from './styles.module.css'
import CardTest from '../CardTest'
import { headers } from 'next/dist/client/components/headers'
import React, { useState } from 'react';
import axios from 'axios'

const Page =() => {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [imgURL, setImgURL] = useState("")

  const subir=async(event)=>{
    let datasend={name, category, price, imgURL}
    console.log('Probando funcionamiento: ', datasend)
    event.preventDefault()
    fetch('auth.consul-sts.com/products', {
		method: 'GET',
		headers: {
			'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTFmNmVmODI2YWQ1NThjMzNkYWVlYiIsImlhdCI6MTY4Mzc1Mzg5NywiZXhwIjoxNjgzODQwMjk3fQ.X4BKA3B9r7v-NWQ6FpVMTVBkWWi3zEwF_aHRMwl09HI',
		},
	})
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err));
  }

  const users = [
    {
        titulo: "Titulo", 
        descripcion: "Descripcion",
        icono: "Icono1"},
    {
        titulo: "Titulo2", 
        descripcion: "Descripcion2",
        icono: "Icono2"},
    {
        titulo: "Titulo3", 
        descripcion: "Descripcion3",
        icono: "Icono3"},
    ]

  return (

    <header className="App-header">
     
     <>
        <div className={styles.containerContent}>
            <div className= {styles.App}>
                <header className= {styles.AppHeader}>

                    <header class= {styles.header}> 
                        <nav class= {styles.nav}>

                            <a href="#" class={styles.logo}>STS</a>
                                <ul class={styles.navMenu}>
                                    <li class={styles.navMenuItem}>
                                        <a href="#" class={styles.navMenuLink}>Inicio</a>
                                    </li>
                                    <li class={styles.navMenuItem}>
                                        <a href="#" class={styles.navMenuLink}>Nosotros</a>
                                    </li>
                                    <li class={styles.navMenuItem}>
                                        <a href="#" class={styles.navMenuLink}>Contacto</a>
                                    </li>
                                    <li class={styles.navMenuItem}>
                                        <a href="#" class={styles.navMenuLink}>Servicios</a>
                                    </li>
                                </ul>
                        </nav>
                    </header>
 
                    <header class={styles.top}> 
                        <a class={styles.info} >Soluciones Tecnologicas</a>
                            <p class={styles.info2}>Brindamos soluciones tecnológicas innovadoras, creativas, para pequeñas y medianas empresas a traves del desarrollo de sistemas de software</p>
                    </header>

                </header>
 
                <body>
                    <a>Servicios Prueba de Cards</a>
                    <div className={styles.cardslayout}>
                        {users.map(user =>  (<CardTest titulo = {user.titulo} descripcion = {user.descripcion} icono={user.icono} ></CardTest>))}
                    </div>

                </body>

                <body>
                <a>Nuestra Filosofia</a>

                </body>

                <body>
                    <p>FORMULARIO</p>
                    <>
                        <form onSubmit={(e)=>subir(e)}>
                            <div>
                                <label>
                                    Nombre:  
                                    <input type="text" name="name" placeholder="Introduce tu nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Categoria: 
                                    <input type="text" name="category" placeholder="Introduce la categoria" value={category} onChange={(e)=>setCategory(e.target.value)}/>
                                </label>
                            </div>
                            <div>
                                <label>
                                    Precio: 
                                    <input type="text" name="price" placeholder="Introduce el precio" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                                </label>
                            </div>  
                            <div>  
                                <label>
                                    imgURL: 
                                    <input type="text" name="imgURL" placeholder="Introduce imgURL" value={imgURL} onChange={(e)=>setImgURL(e.target.value)}/>
                                </label>
                            </div>    
                            
                            <input type="submit" value="Submit" />
                        </form>
                    </>
                </body>
 
            </div>

        </div>

     </>

    </header>
  )
}
export default Page;