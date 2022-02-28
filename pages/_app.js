import "../styles/globals.css"
import { NextUIProvider } from "@nextui-org/react"
import { UserProvider } from '@auth0/nextjs-auth0';
import { useState } from "react"
import "antd/dist/antd.css"

import React from "react"
export let pageWrapper = React.createContext({})

function MyApp({ Component, pageProps }) {
  let [state, setState] = useState({ apiData: [], apiMessage: "" })

  return (
    <pageWrapper.Provider value={{ state, setState }}>
     <UserProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
      </UserProvider>
    </pageWrapper.Provider>
  )
}

export default MyApp
