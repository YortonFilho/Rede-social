import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './style.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-06-14 18:59:45')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/ArturAbreuDev.png',
      name: 'Mayke Brito',
      role: 'Educator @rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de descobrir um site para estudar JavaScript' },
      { type: 'link', content: 'www.JavaScript.com.br' },
    ],
    publishedAt: new Date('2024-06-09 18:59:45')
  }
]

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        
        <Sidebar/>

        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />)
          })}
        </main>
      </div>
    </div>
  )
}
