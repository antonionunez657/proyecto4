import styles from './styles.module.css'
import CardTest from '../CardTest'
import { headers } from 'next/dist/client/components/headers'

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



export default function Page() {

  return ( 

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
                    <a>FORMULARIO</a>

                    </body>
     
                </div>


            </div>
        
    </>

  )
}
