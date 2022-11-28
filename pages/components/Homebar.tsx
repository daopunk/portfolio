import Link from 'next/link';
import { HStack, Flex, Spacer, Heading } from '@chakra-ui/layout';

const Homebar = ({ left = 'WORK', right = 'CONTACT' }: any) => {
  return (
    <Flex w="100%" p="2%">
      <HStack w="100%">
        <Link href={`/${left.toLowerCase()}`}>
          <Heading fontSize="20" fontWeight="bold">
            {left}
          </Heading>
        </Link>
        <Spacer />
        <Link href={`/`}>
          <Heading fontSize="20" fontWeight="bold">
            HOME
          </Heading>
        </Link>
        <Spacer />
        <Link href={`/${right.toLowerCase()}`}>
          <Heading fontSize="20" fontWeight="bold">
            {right}
          </Heading>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Homebar;
