import { VStack, Text, Flex, HStack } from '@chakra-ui/react';
import Homebar from './components/Homebar';

export default function Work() {
  return (
    <VStack h="100vh" position="relative">
      <Homebar left="ABOUT" />
    </VStack>
  );
}
