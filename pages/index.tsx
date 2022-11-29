import { VStack } from '@chakra-ui/react';
import Meta from './components/Meta';
import Navbar from './components/Navbar';
import Name from './components/Name';
import Footer from './components/Footer';
import Roles from './components/Roles';
import Animation from './components/Animation';
import Background from './design/Background';

export default function Home() {
  return (
    <VStack h="100vh" position="relative">
      <Meta />
      <Navbar />
      <Background />
      <Name />
      <Roles />
      <Animation />
      <Footer />
    </VStack>
  );
}
