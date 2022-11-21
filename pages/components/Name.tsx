import Link from 'next/link';
import { VStack, Flex, Spacer, Heading } from '@chakra-ui/layout';

const Name = () => {
  return (
    <Flex
      position="absolute"
      top="45%"
      left="50%"
      transform="translate(-50%, -45%)"
    >
      <VStack alignItems="start">
        <Heading>Hunter King</Heading>
        <Heading>Web3 Developer</Heading>
      </VStack>
    </Flex>
  );
};

export default Name;
