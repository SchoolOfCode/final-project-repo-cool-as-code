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
  console.log(uploadedResponse)
  const response = uploadedResponse.url
  //const p_id =  uploadedResponse.public_id
  return response
}

export default async function handler(req, res) {
  try {
    const urlResponse = await SendFile(req.body.data)
    console.log(urlResponse)
    return res.json({ url: `${urlResponse}` })
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: "Oops something went wrong" })
  }
}
