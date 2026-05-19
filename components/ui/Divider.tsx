import { CSSProperties } from 'react'

export default function Divider({ style }: { style?: CSSProperties }) {
  return (
    <hr style={{
      border: 0,
      borderTop: '1px solid rgba(255,255,255,0.1)',
      margin: 0,
      ...style,
    }} />
  )
}
