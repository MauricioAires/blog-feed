import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import './styles/global.css'
import S from './App.module.css'

export function App() {
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
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}
