import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './styles/global.css'
import S from './App.module.css'

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      publishedAt: new Date('2022-12-29 20:00:00'),
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: '👉 jane.design/doctorcare'
        }
      ]
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rocketseat'
      },
      publishedAt: new Date('2023-01-02 02:00:00'),
      content: [
        {
          type: 'paragraph',
          content: 'Fala galeraa 👋'
        },
        {
          type: 'paragraph',
          content:
            'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
        },
        {
          type: 'link',
          content: '👉 jane.design/doctorcare'
        }
      ]
    }
  ]
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      <Header />
      <div className={S.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  )
}
