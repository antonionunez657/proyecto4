import styles from './styles.module.css'
import CardTest from '../CardTest'

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

    //class='estilo' convencional
    //className='estilos' javascript
  return ( //Objeto JSX 



    <>


    
      <div className={styles.containerMain}>
        <div className={styles.containerContent}>
        <div>
          <div>
            <p>Descripcion: Esta es una pagina de prueba</p>
          </div>
          <br></br>
          <br></br>

          <div className={styles.cardslayout}>
          {users.map(user =>  (<CardTest titulo = {user.titulo} descripcion = {user.descripcion} icono={user.icono} ></CardTest>))}
          
          </div>

          </div>
        </div>
      </div>
    </>
  )
}


  //<CardComponent 
    //titulo= "titulo" 
    //descripcion= "descripcion" 
    //icono= "icono"></CardComponent>
    
  //<CardComponent titulo= "titulo2" descripcion= "descripcion2" icono= "icono2"> </CardComponent>
  //<CardComponent titulo= "titulo3" descripcion= "descripcion3" icono= "icono3"> </CardComponent>

/*
            <div className= {styles.cardDiv}>
              <h1 className={styles.headerCard}>
                Card 1
              </h1>
              <p>Description 1</p>
            </div>
            <div className= {styles.cardDiv}>

            <h1 className={styles.headerCard}>
                Card 2
              </h1>
              <p>Description 2</p>
            </div>

            <div className= {styles.cardDiv}>
            <h1 className={styles.headerCard}>
                Card 3
              </h1>
              <p>Description 3</p>
            </div>
            */