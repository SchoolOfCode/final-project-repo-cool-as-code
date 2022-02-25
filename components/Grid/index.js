import React from "react"

//styles
import styles from "./Grid.module.css"

const Grid = ({ header, children }) => (
  <div>
    <h1 className={styles.Header}>{header}</h1>
    <div className={styles.Content}>{children}</div>
  </div>
)

export default Grid
