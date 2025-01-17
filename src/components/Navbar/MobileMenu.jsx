import React from "react";
import {
  AccordionItem,
  AccordionPanel,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Accordion,
  AccordionIcon,
  AccordionButton,
  Box,
} from "@chakra-ui/react";
import { gift } from "./data";
import { Link } from "react-router-dom";
export default function MobileMenu({ isOpen, onOpen, onClose }) {
  return (
    <>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            {gift.map(
              (label) => (
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          {label.text}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    {label.lists.alldata.map((i) => (
                      <AccordionPanel pb={4}>
                        <Link
                          to={`/products/${label.lists.title}/${i.heading}`}>
                          {i.heading}
                        </Link>
                      </AccordionPanel>
                    ))}
                  </AccordionItem>
                </Accordion>
              )
              //   <Accordion>
              //     <AccordionButton>
              //         <Box as="span" flex='1' textAlign='left'>
              //             {label.text}
              //         </Box>
              //         <AccordionIcon />
              //     </AccordionButton>
              //     <AccordionPanel>

              //             {label.lists.alldata.map(i=><AccordionItem>{i.heading}</AccordionItem>)}

              //     </AccordionPanel>
              //   </Accordion>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
