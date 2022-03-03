import { useState } from "react"
import Head from "next/head"

//styles
import FormStyle from "./Form.module.css"

const Form = () => {
  const [imageSrc, setImageSrc] = useState()
  const [uploadData, setUploadData] = useState()

  function handleOnChange(changeEvent) {
    const reader = new FileReader()

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result)
      setUploadData(undefined)
    }
    reader.readAsDataURL(changeEvent.target.files[0])
  }

  async function handleOnSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    )
    const formData = new FormData()

    for (const file of fileInput.files) {
      formData.append("file", file)
    }

    formData.append("upload_preset", "foodStoryUploads")

    const data = await fetch(
      `https://api.cloudinary.com/v1_1/dia4he3t2/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json())

    console.log("data", data.secure_url)
  }
  return (
    <div className={FormStyle.container}>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image, please" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={FormStyle.main}>
        <h1 className={FormStyle.title}>Image Uploader</h1>
        <p className={FormStyle.description}>Upload your image, Please</p>

        <form
          className={FormStyle.form}
          method="post"
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        >
          <p>
            <input type="file" name="file" />
          </p>

          <img src={imageSrc} />

          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && (
            <code>
              <pre>{JSON.stringify(uploadData, null, 2)}</pre>
            </code>
          )}
        </form>
      </main>
    </div>
  )
}

export default Form
