import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import style from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const [comments, setComments] = useState(['Muito massa!']);

    const [newCommentText, setNewCommentText] = useState(['']);

    function handleCreateNewComment(){
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    }

    return (
      <article className={style.post}>
        <header>
            <div className={style.author}>
                <Avatar hasBorder src={author.avatarUrl}/>

                <div className={style.authorinfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time dateTime={publishedAt.toISOString()}>
                {publisedDateRelativeToNow}
            </time>
        </header>

        <div className={style.content}>
            {content.map(line => {
                if (line.type == 'paragraph') {
                    return <p>{line.content}</p>;
                } else if (line.type == 'link') {
                    return <p><a href="#">{line.content}</a></p>
                }
            })}
        </div>

        <form onSubmit={handleCreateNewComment} className={style.commentform}>
            <strong>Deixe seu feedback</strong>

            <textarea 
            name="comment"
            placeholder="Escreva um comentário..."
            onChange={handleNewCommentChange}
            value={newCommentText}
            />

            <footer>
                <button type="submit">Publicar</button>
            </footer>
        </form>

        <div className={style.commentList}>
            {comments.map(comment => {
                return <Comment content={comment}/>
            })}
        </div>
      </article>
    );
}