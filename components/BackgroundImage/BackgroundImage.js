import { useEffect, useState } from "react"
import Image from "next/image"
import styles from "./styles.module.css"

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

function BGImage() {
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()

  useEffect(() => {
    const { width, height } = getWindowDimensions()
    setWidth(width)
    setHeight(height)
  }, [])

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions()
      setWidth(width)
      setHeight(height)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (width < height) {
    return (
      <div className={styles.box}>
        <Image
          src="/background_portrait.jpg"
          width={width}
          height={height}
          alt="Background Image"
          priority={true}
        />
      </div>
    )
  }
  if (width > height) {
    return (
      <div className={styles.box}>
        <Image
          src="/background_landscape.jpg"
          width={width}
          height={height}
          alt="Background Image"
          priority={true}
        />
      </div>
    )
  }

  return null
}

export default BGImage
