import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './css/Wrapper.module.css'
import { faker } from '@faker-js/faker'

import './global.css'

const post = [
    {
        id: faker.datatype.uuid(),
        author: {
            avatarUrl: faker.image.imageUrl(),
            name: faker.name.fullName(),
            role: faker.name.jobArea()
        },
        content: [
            { type: 'paragraph', content: faker.lorem.words(3) },
            { type: 'paragraph', content: faker.lorem.sentences() },
            { type: 'link', content: `👉 ${faker.internet.url()}` }
        ],
        publishedAt: new Date(faker.date.past())
    },
    {
        id: faker.datatype.uuid(),
        author: {
            avatarUrl: faker.image.imageUrl(),
            name: faker.name.fullName(),
            role: faker.name.jobArea()
        },
        content: [
            { type: 'paragraph', content: faker.lorem.words(3) },
            { type: 'paragraph', content: faker.lorem.sentences() },
            { type: 'link', content: `👉 ${faker.internet.url()}` }
        ],
        publishedAt: new Date(faker.date.past())
    }
]

export function App() {
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {post.map(posts => {
                        return (
                            <Post
                                key={posts.id}
                                author={posts.author}
                                content={posts.content}
                                publishedAt={posts.publishedAt}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}
