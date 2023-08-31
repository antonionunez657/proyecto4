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
        titulo: "Desarrollo Web", 
        descripcion: "Desarrollamos páginas web únicas...",
        icono: "Icono1"},
    {
        titulo: "Aplicaciones Moviles", 
        descripcion: "Creamos aplicaciones móviles....",
        icono: "Icono2"},
    {
        titulo: "Software a Medida", 
        descripcion: "Creamos Software personalizado...",
        icono: "Icono3"},
    {
        titulo: "Bases de Datos", 
        descripcion: "Optimizamos y diseñamos base de datos...",
        icono: "Icono4"},
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
                    <a>SERVICIOS</a>
                    <div className={styles.cardslayout}>
                        {users.map(user =>  (<CardTest titulo = {user.titulo} descripcion = {user.descripcion} icono={user.icono} ></CardTest>))}
                    </div>

                </body>

                <body>
                    <a>Nuestra Filosofia</a>
                    <div className={styles.areaLista}>
                    
                        <ul>
                            <li class="m-1">Alto Sentido de prioridad y responsabilidad ante las necesidades de nuestros clientes.</li>
                            <li class="m-1">Trabajo en equipo, es prioritario en el desarrollo de nuestro trabajo</li>
                            <li class="m-1">Buscamos distinguirnos por el desarrollo de sistemas con interface grafica visualmente amigablemente por el usuario final, asi como componentes minimalistas </li>
                            <li class="m-1">Relaciones a largo plazo con nuestros clientes.</li>
                        </ul>
                    </div>
                </body>

                <body>
                    <h3>Contactanos</h3>
                    <>
                        <form onSubmit={(e)=>subir(e)}>
                            <div>
                                <input type="text" name="name" placeholder="Correo Electronico" value={name} onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div>
                            <textarea type="text" name="category" id="mensaje" cols="30" rows="10" placeholder="Mensaje" value={category} onChange={(e)=>setCategory(e.target.value)}></textarea>
                            </div>
                            <input type="submit" value="Enviar" />
                        </form>
                    </>
                </body>

                <body>
                    <div className={styles.areaSocial}>
                        <div>
                            <h2>Informacion de contacto</h2>
                            <div>
                                <div className={styles.containerSocialSection}>
                                    <p>Imagen</p>
                                    <div className={styles.socialDescription}>
                                        <p>Facebook</p>
                                        <p>www.facebook.com/sts</p>
                                    </div>
                                </div>
                                <div className={styles.containerSocialSection}>
                                    <p>Imagen</p>
                                    <div className={styles.socialDescription}>
                                        <p>Whatsapp</p>
                                        <p>(222) 222 2222</p>
                                    </div>
                                </div>
                                <div className={styles.containerSocialSection}>
                                    <p>Imagen</p>
                                    <div className={styles.socialDescription}>
                                        <p>Correo</p>
                                        <p>sts.puebla@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>

                <body>
                    <div className={styles.Home_sectionFooter__QRMOy}>
                        <div className={styles.styles_sectionFooterContainer__m3E8W}>
                            <div className={styles.styles_sectionFooterContent__ShF7k}>
                                <div>
                                    <p>Todos los derechos reservados 2023</p>
                                    <p>Politicas de Privacidad</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </body>
 
            </div>

        </div>

     </>

    </header>
  )
}
export default Page;

//<input type="text" name="category" placeholder="mensaje" cols="30" rows="10" value={category} onChange={(e)=>setCategory(e.target.value)}/>
