import Link from 'next/link'
import styles from './index.module.scss'

export const NotLogged = () => {
  return (
    <div className={styles.container}>
        <Link className={styles.link} href={'/login'}> Você Não Está Logado, clique aqui</Link>
    </div>
  )
}