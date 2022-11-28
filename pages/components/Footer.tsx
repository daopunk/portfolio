import Link from 'next/link';
import { HStack, VStack, Flex, Spacer, Text } from '@chakra-ui/layout';
import { IconButton, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaGithubSquare, FaMedium } from 'react-icons/fa';

const Footer = () => {
  const iconColor = 'black';

  return (
    <Flex position="absolute" bottom="0" w="100%" p=".5%">
      <Spacer />
      <Flex ml="20%">
        <Link
          href="https://www.linkedin.com/in/hunter-king6776/"
          target="_blank"
        >
          <Icon
            as={FaLinkedin}
            w="8"
            h="8"
            color={iconColor}
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </Flex>
      <Spacer />
      <Flex>
        <Link href="https://github.com/hking2" target="_blank">
          <Icon
            as={FaGithubSquare}
            w="8"
            h="8"
            color={iconColor}
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </Flex>
      <Spacer />
      <Flex mr="20%">
        <Link href="https://medium.com/@cryptoanarchy" target="_blank">
          <Icon
            as={FaMedium}
            w="8"
            h="8"
            color={iconColor}
            style={{ cursor: 'pointer' }}
          />
        </Link>
      </Flex>
      <Spacer />
    </Flex>
  );
};

export default Footer;
