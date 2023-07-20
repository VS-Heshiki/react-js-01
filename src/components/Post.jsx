/* eslint-disable react/prop-types */
import styles from '../css/Post.module.css'
import { Avatar } from './Avatar'
import { Comments } from './Comments'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'
import { faker } from '@faker-js/faker'

export function Post({ author, publishedAt, content }) {
    // eslint-disable-next-line quotes
    const formatDate = format(publishedAt, ("dd 'de' LLLL 'as' HH:mm'h'"),
        { locale: ptBR }
    )

    const formatDateRelativeNow = formatDistanceToNow(publishedAt, {
        addSuffix: true,
        locale: ptBR
    })

    const [comments, setComments] = useState([faker.random.words(10)])
    const [newCommentText, setNewCommentText] = useState('')

    const handleCreateNewComment = () => {
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    const handleNewCommentText = () => {
        setNewCommentText(event.target.value)
    }

    const onDeleteComment = (comment) => {
        const resultWithoutCommentDelete = comments.filter(item => {
            return comment !== item
        })

        setComments(resultWithoutCommentDelete)
    }

    const inputIsEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <div className={styles.publishedAgo}>
                    <time title={formatDate} dateTime={publishedAt.toISOString()}>{formatDateRelativeNow}</time>
                </div>
            </header >
            <div className={styles.container}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else (line.type === 'link'); {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Leave your feedback!</strong>
                <textarea
                    name='comment'
                    onChange={handleNewCommentText}
                    value={newCommentText}
                    type="text"
                    placeholder='Type your comment!'
                    required
                />
                <footer>
                    <button type='submit' disabled={inputIsEmpty}>Publish!</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comments
                            key={comment}
                            content={comment}
                            onDeleteComment={onDeleteComment}
                        />)
                })}
            </div>
        </article>
    )
}
