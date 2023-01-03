import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import S from './Comment.module.css'

export function Comment({ content }) {
  return (
    <div className={S.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/lauragrassig.png"
        alt="Avatar Laura Grassi"
      />

      <div className={S.commentBox}>
        <div className={S.commentContent}>
          <header>
            <div className={S.authorAndTime}>
              <strong>Laura Grassi</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Excluir">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Vamos aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
