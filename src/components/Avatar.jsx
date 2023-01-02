import S from './Avatar.module.css'

export function Avatar({ hasBorder = true, src, alt }) {
  return (
    <img
      className={hasBorder ? S.avatarWithBorder : S.avatar}
      src={src}
      alt={alt}
    />
  )
}
