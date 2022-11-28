import { Flex } from '@chakra-ui/layout';

const Background = () => {
  return (
    <Flex id="canvas" position="absolute" top="-5">
      <Flex className="bubble"></Flex>
      <Flex className="bubble"></Flex>
      <Flex className="bubble"></Flex>
      <Flex className="bubble"></Flex>
      <Flex className="bubble"></Flex>
      <Flex className="bubble"></Flex>
      <Flex className="bubble"></Flex>
    </Flex>
  );
};

export default Background;
