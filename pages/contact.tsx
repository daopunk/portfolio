import { VStack, Text, Flex, HStack } from '@chakra-ui/react';
import Homebar from './components/Homebar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function Contact() {
  return (
    <VStack h="125vh" position="relative" backgroundColor="black">
      <Homebar right="ABOUT" />
      <ContactForm />
      <Footer />
    </VStack>
  );
}
