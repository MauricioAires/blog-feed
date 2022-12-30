/**
 * @description (css) Escopo, css module ( scoped css )
 * css module
 */

export function Post({ author, content }) {
  return (
    <div>
      <h1>{author}</h1>
      <p>{content}</p>
    </div>
  )
}
