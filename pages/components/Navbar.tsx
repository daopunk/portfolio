import Link from 'next/link';
import { HStack, Flex, Spacer, Heading } from '@chakra-ui/layout';

const Navbar = () => {
  const routes = ['WORK', 'ABOUT', 'CONTACT'];
  const y =
    '0 0 8px #0fa, 0 0 12px #0fa, 0 0 16px #0fa, 0 0 20px #0fa, 0 0 40px #0fa, 0 0 50px #0fa, 0 0 60px #0fa';

  return (
    <Flex position="absolute" w="100%" p="2%">
      <HStack w="100%">
        <Link href={`/${routes[0].toLowerCase()}`}>
          <Heading
            fontSize="20"
            fontWeight="bold"
            className="neonBase"
            _hover={{ textShadow: y }}
          >
            {routes[0]}
          </Heading>
        </Link>
        <Spacer />
        <Link href={`/${routes[1].toLowerCase()}`}>
          <Heading
            fontSize="20"
            fontWeight="bold"
            className="neonBase"
            _hover={{ textShadow: y }}
          >
            {routes[1]}
          </Heading>
        </Link>
        <Spacer />
        <Link href={`/${routes[2].toLowerCase()}`}>
          <Heading
            fontSize="20"
            fontWeight="bold"
            className="neonBase"
            _hover={{ textShadow: y }}
          >
            {routes[2]}
          </Heading>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
