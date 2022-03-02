import React, { useState } from 'react'

const Camera = () => {
   const [picture , setPicture] = useState()
    
   function takePicture(e){
    setPicture(e.target.value)


   }
   
   console.log(picture)
   
   
    return (
        <div>
           
            <label>Upload a photo of your meal:</label>
            <input type="file" id="imageFile" capture="enviroment" accept="image/*" onChange={takePicture }  ></input>
        </div>
    )
}

export default Camera