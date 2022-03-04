import cloudinary from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_API_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function SendFile(fileStr) {
  const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
    upload_preset: "food_story",
  })
  return uploadedResponse
}

export default async function handler(req, res) {
  try {
    const data = await SendFile(req.body.data)
    console.log(data.url)
    return res.send({ data })
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: "Oops something went wrong" })
  }
}
