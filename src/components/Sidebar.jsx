import style from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    return (
        <aside className={style.sidebar}>
            <img 
            className={style.cover}
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            
            <div className={style.profile}>
                <img className={style.avatar} src="https://github.com/YortonFilho.png" />

                <strong>Yorton Filho</strong>
                <span>Developer Web</span>
            </div>

            <footer>
                <a href="#"><PencilLine size={20}/>Editar perfil</a>
            </footer>
        </aside>
    )
}