import {type ChangeEvent} from 'react'

import styles from './Input.module.css'

type Props = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, onChange}: Props) => {
  return (
    <input
      className={styles.input}
      type="text"
      required
      value={value}
      onChange={onChange}
    />
  )
}

export default Input
