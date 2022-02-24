import "../styles/globals.css"
import { NextUIProvider } from "@nextui-org/react"
import { useState } from "react"

import React from "react"
export let pageWrapper = React.createContext({})


function MyApp({ Component, pageProps }) {
  let [state ,setState] = useState({apiData:[]})
  
  return (
    <pageWrapper.Provider value={{state,setState}}>
    <NextUIProvider>
      <Component {...pageProps} />
     </NextUIProvider> 
    </pageWrapper.Provider>
  )
}

export default MyApp
