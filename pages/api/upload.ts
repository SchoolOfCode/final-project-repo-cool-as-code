import cloudinary from "cloudinary"
//import { NextApiRequest, NextApiResponse } from "next"

cloudinary.v2.config({
cloud_name:'food-story',
api_secret:'319415282638259',
api_key:'FZuMH-pIFTvytt6de0FaDgB0OvQ'
})



export default async function handler(req, res) {
    if(req.method !== "POST"){
        res.status(405).send({message:"Only Post request allowed"})
          return
    }else{
        
       // const { dataString, filename, code } = req.body
 const picture = JSON.stringify(req.body)
    console.log(picture)
    //console.log(filename)
   // console.log(code)
  const result = await cloudinary.v2.uploader.upload(picture, {upload_preset:"food_story"})
res.status(200).send({message:"sent"}) 
 //console.log(result)


    }
    
   
}

  