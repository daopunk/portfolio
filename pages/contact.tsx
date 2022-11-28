import { VStack, Text, Flex, HStack } from '@chakra-ui/react';
import Homebar from './components/Homebar';

export default function Contact() {
  return (
    <VStack h="100vh" position="relative" backgroundColor="black">
      <Homebar right="ABOUT" />
    </VStack>
  );
}
