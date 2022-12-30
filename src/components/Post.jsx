import S from './Post.module.css'

export function Post() {
  return (
    <article className={S.post}>
      <header>
        <div className={S.author}>
          <img className={S.avatar} src="https://github.com/diego3g.png" />
          <div className={S.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Públicado há 1h
        </time>
      </header>

      <div className={S.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={S.commentForm}>
        <strong> Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
