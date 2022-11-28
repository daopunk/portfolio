import { Flex, VStack, Text } from '@chakra-ui/layout';

const Neonhuman = () => {
  const x = 'neonX lh';
  return (
    <VStack position="absolute" top="15vh" alignItems="start">
      <pre className={x}>{` .##. ###. #### #  # #####`}</pre>
      <pre className={x}>{` #  # #  # #  # #  #   # `}</pre>
      <pre className={x}>{` #  # ###: #  # #  #   # `}</pre>
      <pre className={x}>{` #### #  # #  # #  #   # `}</pre>
      <pre className={x}>{` #  # ###' #### ####   # `}</pre>
    </VStack>
  );
};

export default Neonhuman;
