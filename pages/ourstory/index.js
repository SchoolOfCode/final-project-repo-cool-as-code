import React from "react";
import Header from "../../components/Header";
import { Box, Text } from "@chakra-ui/react";
import styles from "./styles.module.css";
import Image from "next/image";
const ourstory = () => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>Our Story</h1>
      <Image
        src="/image/logo_dark.png"
        alt="Foodstory Logo"
        layout="intrinsic"
        width="136"
        height="52"
      />
      <div className={styles.flex}>
        <Box>
          <Text fontSize="3xl"> This is how Foodstory came to be...</Text>
        </Box>
        <div className={styles.mainText}>
          <Text fontSize="2xl">
            Foodstory was borne from one founders wish to document their family
            recipes, not in scrawled handwriting on old scraps of paper, but in
            digital format. It is an idea that resonated with us all, as an
            ethnically and culturally diverse team, we could all relate to the
            yearning of wanting to learn and preserve the recipes that underpin
            our respective cultures.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ourstory;
