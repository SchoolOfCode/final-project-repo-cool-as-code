import "../styles/globals.css"
import { NextUIProvider } from "@nextui-org/react"
import { UserProvider } from "@auth0/nextjs-auth0"
import { useState } from "react"
import "antd/dist/antd.css"
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
export let pageWrapper = React.createContext({})
import { foodstory } from "../styles/theme.js"

function MyApp({ Component, pageProps }) {
  let [state, setState] = useState({
    apiData: [],

    selectedRecipe: null,
    searchSuccess: false,
    searchResult: [],
    searchMessage: "",
  })


  return (
    <ChakraProvider theme={foodstory}>
      <pageWrapper.Provider value={{ state, setState }}>
        <UserProvider>
          <NextUIProvider>
            <div className="bg-gray-global">
              <Component {...pageProps} />
            </div>
          </NextUIProvider>
        </UserProvider>
      </pageWrapper.Provider>
    </ChakraProvider>

  );

}

export default MyApp
