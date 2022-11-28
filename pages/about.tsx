import { VStack, Text, Flex, HStack } from '@chakra-ui/react';
import Homebar from './components/Homebar';
import Neonhuman from './design/Neonhuman';

export default function About() {
  return (
    <VStack h="100vh" position="relative" backgroundColor="black">
      <Homebar />
      <Neonhuman />
    </VStack>
  );
}
