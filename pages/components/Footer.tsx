import Link from 'next/link';
import { Flex, Spacer, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaGithubSquare, FaMedium } from 'react-icons/fa';

const Footer = () => {
  const iconColor = '#bafac8';
  const iconShadow = '0 0 3px #02f938, 0 0 1px #02f938';

  return (
    <Flex position="absolute" bottom="0" w="100%" p="10px">
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
            shadow={iconShadow}
            style={{ cursor: 'pointer' }}
            _hover={{ transform: 'scale(1.2)', transition: '.2s' }}
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
            shadow={iconShadow}
            style={{ cursor: 'pointer' }}
            _hover={{ transform: 'scale(1.2)', transition: '.2s' }}
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
            shadow={iconShadow}
            style={{ cursor: 'pointer' }}
            _hover={{
              transform: 'scale(1.2)',
              transition: '.2s',
            }}
          />
        </Link>
      </Flex>
      <Spacer />
    </Flex>
  );
};

export default Footer;
