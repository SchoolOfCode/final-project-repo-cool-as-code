import Header from "../../components/Header"
import { pageWrapper } from "../../pages/_app"
import styles from "./styles.module.css"

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react"

const Template = ({ title }) => {
  return (
    <div>
      <Header />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.createRecipe}>
        <div className={styles.recipeForm}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia optio
          possimus veritatis asperiores est! Nostrum temporibus corporis eum
          minima? Culpa tenetur pariatur quisquam unde atque? Quisquam, iure!
          Atque, ab ducimus? Libero illo incidunt, magnam optio animi ullam quae
          non veniam, enim, nemo provident necessitatibus fugit quidem debitis
          cum perferendis odit? In optio praesentium eius voluptate officiis
          perspiciatis expedita autem recusandae quos, deserunt ex ut harum
          cupiditate dolorum atque sequi rerum libero inventore accusamus
          debitis blanditiis delectus. Numquam nam expedita modi est labore.
          Dicta illo vero odit possimus, ad libero aspernatur, neque, eveniet
          deserunt sint error vel dignissimos. Nesciunt, laudantium nisi?
        </div>
        <br />
        <div className={styles.tabContainer}>
          <Tabs className={styles.tabs} isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab
                border="1px"
                bg="#ffe6c8"
                borderColor="#fbd3a2"
                _selected={{ color: "#023047", bg: "#fb8500" }}
                _active={{
                  bg: "rgb(255, 226, 146)",
                  transform: "scale(0.98)",
                  borderColor: "#fb8500",
                }}
                _focus={{
                  boxShadow:
                    "0 0 1px 2px #fb8500, 0 1px 1px rgba(0, 0, 0, .15)",
                }}
              >
                Ingredients
              </Tab>
              <Tab
                bg="#ffe6c8"
                borderColor="#fbd3a2"
                _selected={{ color: "#023047", bg: "#fb8500" }}
                _active={{
                  bg: "rgb(255, 226, 146)",
                  transform: "scale(0.98)",
                  borderColor: "#fb8500",
                }}
                _focus={{
                  boxShadow:
                    "0 0 1px 2px #fb8500, 0 1px 1px rgba(0, 0, 0, .15)",
                }}
              >
                Method
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                optio possimus veritatis asperiores est! Nostrum temporibus
                corporis eum minima? Culpa tenetur pariatur quisquam unde atque?
                Quisquam, iure! Atque, ab ducimus? Libero illo incidunt, magnam
                optio animi ullam quae non veniam, enim, nemo provident
                necessitatibus fugit quidem debitis cum perferendis odit? In
                optio praesentium eius voluptate officiis perspiciatis expedita
                autem recusandae quos, deserunt ex ut harum cupiditate dolorum
                atque sequi rerum libero inventore accusamus debitis blanditiis
                delectus. Numquam nam expedita modi est labore. Dicta illo vero
                odit possimus, ad libero aspernatur, neque, eveniet deserunt
                sint error vel dignissimos. Nesciunt, laudantium nisi?
              </TabPanel>
              <TabPanel>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, temporibus porro velit iste perspiciatis odio
                reiciendis autem minus, tenetur alias, ab mollitia aliquid.
                Magnam consectetur numquam quasi dolor omnis, quos quidem
                laudantium eaque quia doloribus, aliquam nam, perferendis
                quaerat sint minus non! Nemo ducimus exercitationem excepturi
                sed temporibus! Minus deleniti et itaque dolorem a consequatur
                iure nesciunt dolore autem. Nulla architecto neque magnam, enim
                voluptatibus saepe quo exercitationem perspiciatis numquam
                consectetur harum libero, doloribus culpa maxime magni, mollitia
                quam assumenda quia! Laboriosam impedit assumenda recusandae
                laborum doloribus aperiam voluptate eum amet ad ipsam tempora
                quidem inventore necessitatibus labore, voluptas commodi!
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Template
