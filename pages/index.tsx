import { VStack, Flex, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Animation from './components/Animation';

export default function Home() {
  const Background = () => {
    return (
      <Flex id="canvas" position="absolute" top="-5">
        <Flex className="bubble"></Flex>
        <Flex className="bubble"></Flex>
        <Flex className="bubble"></Flex>
        <Flex className="bubble"></Flex>
      </Flex>
    );
  };

  const Name = () => {
    return (
      <Flex
        position="absolute"
        top="45%"
        left="50%"
        transform="translate(-50%, -45%)"
      >
        <VStack alignItems="start">
          <Heading fontWeight="thin" className="neonName">
            Hunter King
          </Heading>
          <Heading className="neonBase">
            Web
            <span className="neon3">3</span> Developer
          </Heading>
        </VStack>
      </Flex>
    );
  };

  const Roles = () => {
    return (
      <Flex position="absolute" bottom="0" left="0" pb="20" pl="3%">
        <VStack alignItems="start">
          <Text fontWeight="medium" className="neonBase">
            Smart Contract Engineering
          </Text>
          <Text fontWeight="medium" className="neonBase">
            Fullstack Development
          </Text>
        </VStack>
      </Flex>
    );
  };

  return (
    <VStack h="100vh" position="relative">
      <Head>
        <title>Hunter King</title>
        <meta name="description" content="Hunter King's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Background />
      <Name />
      <Roles />
      <Animation />
      <Footer />
    </VStack>
  );
}
