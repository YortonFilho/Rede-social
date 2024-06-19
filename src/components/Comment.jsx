import { ThumbsUp, Trash } from 'phosphor-react'
import style from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment({ content }){
    return(
        <div className={style.comment}>
            <Avatar src="https://github.com/YortonFilho.png"/>

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header className={style.author}>
                        <div className={style.authorInfo}>
                            <strong>Yorton</strong>
                            <time title="5 de junho as 19:17" dateTime="2024-06-05 19:17:50">Publicado há 1 hora</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20} />   
                        Aplaudir <span>20</span>           
                    </button>   
                </footer>
            </div>
        </div>
    )
}