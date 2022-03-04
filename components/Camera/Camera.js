


import { useState } from "react"
import Image from "next/image"

function Camera() {
  const [fileInput, setFileInputState] = useState("")
  const [response, setResponse] = useState("")
  const [previewSource, setPreviewSource] = useState()

  function handleFileInputChange(e) {
    const file = e.target.files[0]
    previewFile(file)
  }

  function previewFile(file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  function handleSubmitFile(e) {
    console.log("submitted")
    e.preventDefault()
    if (!previewSource) return
    uploadImage(previewSource)
    //console.log(response)
  }

  async function uploadImage(base64EncodedImage) {
    // console.log(base64EncodedImage)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-type": "application/json" },
      })
      console.log(await response.json())
      return setResponse(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmitFile} className="form">
        <label>Upload a photo of your meal:</label>
        <input
          value={fileInput}
          type="file"
          id="imageFile"
          capture="enviroment"
          accept="image/*"
          onChange={handleFileInputChange}
          className="form-input"
        ></input>
        <button className="btn" type="submit">
          Submit{" "}
        </button>
      </form>
      {previewSource && (
        <Image src={previewSource} alt="food" width={300} height={300} />
      )}
    </>
  )
}

export default Camera


