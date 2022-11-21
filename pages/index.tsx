import { VStack, Text, Flex, HStack } from '@chakra-ui/react';
import Meta from './components/Meta';
import Navbar from './components/Navbar';
import Name from './components/Name';
import Footer from './components/Footer';
import Roles from './components/Roles';
import Animation from './components/Animation';

export default function Home() {
  return (
    <VStack h="100vh" position="relative">
      <Meta />
      <Navbar />
      <Name />
      <Roles />
      <Animation />
      <Footer />
    </VStack>
  );
}
