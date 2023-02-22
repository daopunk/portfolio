import Link from 'next/link';
import Homebar from './components/Homebar';
import { Flex, VStack, Text, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

export default function About() {
  return (
    <VStack h="180vh" position="relative" backgroundColor="black">
      <Homebar />
      <VStack position="absolute" top="15vh" alignItems="start">
        <Flex mx="auto">
          <pre className="neonX lh">{`
                        ,,,,,,,_                               
                        "^~;;;###;,_                           
    .-~c~-.                    '~:##^-.                        
 ~~~-.c####;                      ':###'-,     _.-~~^^~:.      
      'l###;      _,--~~~~-._       ':### ~. .~##########:.    
       .##;'   .:#############:       ':###;/#####.:-:#####:.  
     .'##:   :######.-~^~-.####'.       '#.'####:      '.####. 
    :###' _:####.-'        '.####:.     .:####::.       :####;
    :###-'####:'             '.####'^~~^'####:.##.      ;####;
    '-.##,-~                   ~.#########'  ':###'.__.'#####'
                                  ~--..--'     ':###########' 
                                                 '=:;;;;::'    
      `}</pre>
        </Flex>
        <Text className="neonYy" pl="15px" pt="10px">
          Hello Internet,
        </Text>
        <VStack w="600px" mx="auto" pl="15px" pr="5px" alignItems="start">
          <Text className="neonYy">
            Technology determines the political possibilities of a given time.
          </Text>
          <Text className="neonYy">
            Due to the advent of blockchain and decentralized ledger technology,
            we live at a moment when we not only imagine radically altered
            economic and political systems, but have the tools to build those
            ideas into reality. Tools like cyptocurrencies, DAOs, and
            self-sovereign identity, to name a few, have increased our ability
            to coordinate and expanded our strategic capacity.
          </Text>
          <Text className="neonYy">
            The possibility to innovate at the root level of social
            organization, unconstrained by the traditional pitfalls of a broken
            economic and political order, is what motivates me to learn, code,
            and collaborate with other builders everyday.
          </Text>
          <Text className="neonYy">
            Please, feel free to connect if you wish to collaborate. <br />-
            huntrr
          </Text>
        </VStack>
        <Flex w="600px" p="18px">
          <Spacer />
          <Link href="/contact">
            <Button className="neonYy" fontSize="20">
              Contact
            </Button>
          </Link>
          <Spacer />
        </Flex>
      </VStack>
    </VStack>
  );
}
