import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcImg from "../assets/btc.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Box w={"full"} h={"85vh"} bgColor={'blackAlpha.300'}>
      <motion.div
      style={{
        height: "80vh",
      }}
      animate={{
        translateY: "20px",
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}>
      <Image w={"full"} h={"full"} objectFit={"contain"} src={btcImg} />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        mt={"-20"}
        
      >
        CryptoNet
      </Text>
    </Box>
  );
};

export default Home;
