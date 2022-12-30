import { Header } from './components/Header'
import { Post } from './Post'

import './styles/global.css'
import S from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={S.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Mauricio Aires"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus placeat fuga omnis, quasi tenetur. Iusto, pariatur repellendus? A corporis quibusdam molestiae assumenda voluptatem quo alias cupiditate iure vitae? Perspiciatis!"
          />

          <Post
            author="Alex Alan"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, provident! Perspiciatis ducimus quis excepturi officia quasi cum, autem placeat laborum natus laudantium quia totam at doloremque, nulla a consectetur soluta."
          />
        </main>
      </div>
    </div>
  )
}
