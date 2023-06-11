import styles from './styles.module.scss'
import { UserInterface } from '@/Interfaces/user'

const Page: React.FC<UserInterface>=({titulo, descripcion, icono}) => {
    return (
        <div className={styles.containerCardTest}>
            <div className={styles.contentCardTest}>
                <p className={styles.headerCard}>{titulo}</p>
                <p className={styles.cardBody}>{descripcion}</p>
                <p className={styles.cardBody2}>{icono}</p>
            </div>
        </div>
    )
}


export default Page