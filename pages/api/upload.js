import cloudinary from "cloudinary"
//import { NextApiRequest, NextApiResponse } from "next"

cloudinary.config({
cloud_name:'food-story',
api_key:'319415282638259',
api_secret:'FZuMH-pIFTvytt6de0FaDgB0OvQ'
})


export default async function handler(req, res){

try {
  const fileStr = req.body.data;
  const uploadedResponse = await cloudinary.uploader.upload(fileStr,{
    upload_preset:"food_story"

  })
  console.log(uploadedResponse)
  res.json({msg:"yay"})
} catch (error) {
  console.log(error);
  res.status(500).json({err:"something went wrong"})
}



}




    
    
   


  