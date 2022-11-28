import Link from 'next/link';
import { HStack, Flex, Spacer, Heading } from '@chakra-ui/layout';
import { MouseOver, MouseOut } from '../utils/hover';

const Navbar = () => {
  const routes = ['WORK', 'ABOUT', 'CONTACT'];

  return (
    <Flex position="absolute" w="100%" p="2%">
      <HStack w="100%">
        <Link href={`/${routes[0].toLowerCase()}`}>
          <Heading
            fontSize="20"
            fontWeight="bold"
            className="neonYy"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            {routes[0]}
          </Heading>
        </Link>
        <Spacer />
        <Link href={`/${routes[1].toLowerCase()}`}>
          <Heading
            fontSize="20"
            fontWeight="bold"
            className="neonYy"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            {routes[1]}
          </Heading>
        </Link>
        <Spacer />
        <Link href={`/${routes[2].toLowerCase()}`}>
          <Heading
            fontSize="20"
            fontWeight="bold"
            className="neonYy"
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
          >
            {routes[2]}
          </Heading>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
