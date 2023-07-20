/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../css/Comment.module.css'
import { Avatar } from './Avatar'

import { useState } from 'react'
import { faker } from '@faker-js/faker'

const avatarUrl = faker.image.imageUrl()
const name = faker.name.fullName()

export function Comments({ content, onDeleteComment }) {
    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const [likeComment, setLikeComment] = useState(0)

    const handleLikeComment = () => {
        setLikeComment(likeComment + 1)
    }


    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src={avatarUrl}
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.commentInfo}>
                            <strong>{name}</strong>
                            <time dateTime='2023-07-12 18:13:00'>Commented ago 1h</time>
                        </div>
                        <button>
                            <Trash size={24} alt='Delete Comment' onClick={handleDeleteComment} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Like <span>{likeComment}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
