import Link from 'next/link';
import { VStack, Flex, Spacer, Heading, Text } from '@chakra-ui/layout';

const Name = () => {
  return (
    <Flex
      position="absolute"
      top="45%"
      left="50%"
      transform="translate(-50%, -45%)"
    >
      <VStack alignItems="start">
        <Heading fontWeight="thin">Hunter King</Heading>
        <Heading>
          Web<span style={{ color: 'rgb(149, 2, 247)' }}>3</span> Developer
        </Heading>
      </VStack>
    </Flex>
  );
};

export default Name;
