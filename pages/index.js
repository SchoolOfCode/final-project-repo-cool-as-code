import Header from "../components/Header/Header.js";
import Image from "next/image";

import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Header />
      <Image
        layout="responsive"
        src="/home.jpg"
        alt="Sunset"
        width={600}
        height={450}
      />
      <Button color="gradient" auto>
        Enter
      </Button>
    </>
  );
}
