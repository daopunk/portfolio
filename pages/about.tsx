import Link from 'next/link';
import Footer from './components/Footer';
import Homebar from './components/Homebar';
import {
  Flex,
  Text,
  VStack,
  Divider,
  Spacer,
  UnorderedList,
  ListItem,
  Heading,
} from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';

export default function About() {
  return (
    <VStack h="200vh" backgroundColor="black">
      <Homebar />
      <VStack top="150px" alignItems="start">
        <VStack
          w="380px"
          pt="50px"
          mx="auto"
          alignItems="start"
          className="neonText"
        >
          <Divider />
          <Heading size="lg">Hunter King</Heading>
          <Heading size="md">Software Engineer</Heading>
          <Divider />
          <Text>
            <i>
              Technology determines the political possibilities of a given time.
            </i>
          </Text>
          <Divider />
          <Heading size="md" fontWeight="bold" pt="20px">
            Experience:
          </Heading>
          <UnorderedList>
            <ListItem>
              <b>Raid Guild DAO - Smart Contract Engineer</b>
              <UnorderedList>
                <ListItem listStyleType="none">August 2022 - Present</ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <b>ChainShot - Teacher Assistant</b>
              <UnorderedList>
                <ListItem listStyleType="none">
                  January 2022 - July 2022
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <b>Freelance - E-Commerce Web Developer</b>
              <UnorderedList>
                <ListItem listStyleType="none">
                  March 2021 - October 2021
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
          <Heading size="md" fontWeight="bold" pt="15px">
            Skills:
          </Heading>
          <UnorderedList>
            <ListItem>Solidity, EVM</ListItem>
            <ListItem>JavaScript, TypeScript</ListItem>
            <ListItem>ReactJS, NextJS, NodeJS</ListItem>
            <ListItem>Hardhat, Forge / Foundry</ListItem>
            <ListItem>EthersJS, SolC-JS</ListItem>
            <ListItem>HTML, CSS, ChakraUI</ListItem>
            <ListItem>Git, Github</ListItem>
            <ListItem>MongoDB, SQL, Subgraph</ListItem>
            <ListItem>IPFS</ListItem>
          </UnorderedList>
          <Heading size="md" fontWeight="bold" pt="15px">
            Hackathon Awards:
          </Heading>
          <UnorderedList>
            <ListItem>
              EthMexico - Finalist, Polygon / SuperFluid Awards
            </ListItem>
            <ListItem>NFT EthGlobal - Finalist</ListItem>
          </UnorderedList>
          <Heading size="md" fontWeight="bold" pt="15px">
            Conference Presentations:
          </Heading>
          <UnorderedList>
            <ListItem>
              <b>Political Autonomy Beyond the Nation-State</b>
              <UnorderedList>
                <ListItem listStyleType="none">
                  Sussex University, Brighton - UK, 2019
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              <b>Disposable People, Disposable Planet</b>
              <UnorderedList>
                <ListItem listStyleType="none">
                  CSU, Los Angeles - US, 2018
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
          <Divider pt="20px" />
        </VStack>
        <Flex w="380px" p="30px">
          <Spacer />
          <Link
            href="https://docs.google.com/document/d/14kT0Y5x_KzkCvjgJkgEdzoAfpA-Q0sc3FZOoBSH7yC8/edit"
            target="_blank"
          >
            <Button className="neonText" fontSize="20">
              View Resume
            </Button>
          </Link>
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
