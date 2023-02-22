import Link from 'next/link';
import Footer from './components/Footer';
import Homebar from './components/Homebar';
import {
  Flex,
  VStack,
  Text,
  Spacer,
  UnorderedList,
  ListItem,
  Heading,
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

export default function About() {
  return (
    <VStack h="130vh" backgroundColor="black">
      <Homebar />
      <VStack top="150px" alignItems="start">
        <VStack w="380px" mx="auto" alignItems="start" className="neonText">
          <Heading size="md" fontWeight="bold" pt="15px">
            Experience:
          </Heading>
          <UnorderedList>
            <ListItem>Raid Guild DAO - Smart Contract Engineer</ListItem>
            <ListItem>ChainShot - Teacher Assistant</ListItem>
            <ListItem>Freelance - E-Commerce Web Developer</ListItem>
          </UnorderedList>
          <Heading size="md" fontWeight="bold" pt="15px">
            Skills:
          </Heading>
          <UnorderedList>
            <ListItem>Solidity, EVM</ListItem>
            <ListItem>JavaScript, TypeScript</ListItem>
            <ListItem>React, NextJS, NodeJS</ListItem>
            <ListItem>Hardhat, Forge / Foundry</ListItem>
            <ListItem>EthersJS, SolC-JS</ListItem>
            <ListItem>IPFS</ListItem>
            <ListItem>HTML, CSS, ChakraUI</ListItem>
            <ListItem>Git, Github</ListItem>
            <ListItem>MongoDB, SQL, Subgraph</ListItem>
          </UnorderedList>
          <Heading size="md" fontWeight="bold" pt="15px">
            Hackathon Awards:
          </Heading>
          <UnorderedList>
            <ListItem>
              EthMexico - Finalist, Polygon / SuperFluid Awards{' '}
            </ListItem>
            <ListItem>NFT EthGlobal - Finalist</ListItem>
          </UnorderedList>
        </VStack>
        <Flex w="380px" p="30px">
          <Spacer />
          <Link href="/contact">
            <Button className="neonText" fontSize="20">
              Connect
            </Button>
          </Link>
          <Spacer />
        </Flex>
      </VStack>
      <Footer />
    </VStack>
  );
}
