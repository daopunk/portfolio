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
        <Heading fontWeight="thin" className="neonY">
          Hunter King
        </Heading>
        <Heading className="neonYy">
          Web
          <span className="neonZ">3</span> Developer
        </Heading>
      </VStack>
    </Flex>
  );
};

export default Name;
