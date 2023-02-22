import Link from 'next/link';
import { HStack, Flex, Spacer, Heading } from '@chakra-ui/layout';

const Homebar = ({ left = 'WORK', right = 'CONTACT' }: any) => {
  const y =
    '0 0 8px #0fa, 0 0 12px #0fa, 0 0 16px #0fa, 0 0 20px #0fa, 0 0 40px #0fa, 0 0 50px #0fa, 0 0 60px #0fa';

  return (
    <Flex w="100%" p="2%">
      <HStack w="100%">
        <Link href={`/${left.toLowerCase()}`}>
          <Heading
            fontSize="20"
            fontWeight="bold"
            className="neonBase"
            _hover={{ textShadow: y }}
          >
            {left}
          </Heading>
        </Link>
        <Spacer />
        <Link href={`/`}>
          <Heading
            fontSize="20"
            fontWeight="bold"
            className="neonBase"
            _hover={{ textShadow: y }}
          >
            HOME
          </Heading>
        </Link>
        <Spacer />
        <Link href={`/${right.toLowerCase()}`}>
          <Heading
            fontSize="20"
            fontWeight="bold"
            className="neonBase"
            _hover={{ textShadow: y }}
          >
            {right}
          </Heading>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Homebar;
