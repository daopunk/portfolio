import { VStack, HStack, Heading } from '@chakra-ui/react';
import Homebar from './components/Homebar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

export default function Work() {
  return (
    <VStack h="350vh" backgroundColor="black">
      <Homebar left="ABOUT" />
      <Heading className="neonText" pt="50px">
        Selected Web Apps / [d]Apps
      </Heading>
      <VStack py="50px">
        <HStack alignItems="baseline">
          <ProjectCard
            name="Rite of Moloch | DAO Tooling"
            desc="Rite of Moloch is a DAO onboarding and staking tool that integrates Hats Protocol and DaoHausV3 Baal Shamans to enhance governance around onboarding."
            live="https://rite-of-moloch-v1.vercel.app/"
            github="https://github.com/rite-of-moloch/RiteOfMoloch-v1.0"
            image="/riteLogo.png"
          />
          <ProjectCard
            name="Emergence | DAO Tooling"
            desc="Emergence is an on-chain video platform that distribute tokens during calls + generates a script for DAO documentation + increases onboarding metrics quality."
            live="https://ethglobal.com/showcase/emergence-o3tns"
            github="https://github.com/Emergence-Dapp/emergence"
            image="/emergenceLogo.png"
          />
        </HStack>
        <HStack alignItems="baseline">
          <ProjectCard
            name="DuoMint | Web3 Onboarding"
            desc="Duomint is the stress-free web3 onramp. New users receive a free NFT and are guided through the magic of web3 without the stress of wire transfers and gas fees."
            live="https://ethglobal.com/showcase/duomint-k1614"
            github="https://github.com/Emergence-Dapp/emergence"
            image="/duomintLogo.png"
          />
          <ProjectCard
            name="EOA-Watch | Web3 Tooling"
            desc="EOA-Watch is application that deploys a flashbot to rescue stranded assets in a vulnerable Ethereum wallet that still contains ERC20 or ERC721 tokens."
            live="https://hack-dinero.netlify.app/"
            github="https://github.com/hking2/eoa-rescue"
            image="/eoaLogo.png"
          />
        </HStack>
        <HStack alignItems="baseline">
          <ProjectCard
            name="EVM Storage | Code Tutorial"
            desc="Solidity Storage Access with EtherJS is a coding tutorial on accessing mappings, arrays, and nested variables posted on my Medium blog: @cryptoAnarchy"
            live="https://betterprogramming.pub/solidity-storage-variables-with-ethers-js-ca3c7e2c2a64"
            github="https://github.com/hking2/solidity-storage-access"
            image="/blogLogo.png"
          />
          <ProjectCard
            name="Cindita's Tienda | E-Commerce"
            desc="Cinidita's Tienda is an e-commerce application for art and jewelry sales with PayPal integration built with the MERN stack and hosted on DigitalOcean."
            live="https://cindita.com/"
            github="https://github.com/hking2/cindys-tienda"
            image="/cinditaLogo.png"
          />
        </HStack>
      </VStack>
      <Footer />
    </VStack>
  );
}
