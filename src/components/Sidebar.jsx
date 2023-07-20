import styles from '../css/Sidebar.module.css'

import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1591710668263-bee1e9db2a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50'
            />
            <div className={styles.profile}>

                <Avatar
                    src='https://avatars.githubusercontent.com/u/57600375?v=4'
                    alt='Foto do perfil'
                />

                <strong>Victor S. Heshiki</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Edite seu perfil
                </a>
            </footer>
        </aside>
    )
}
