import { VStack, Text, Flex } from '@chakra-ui/react';
import Homebar from './components/Homebar';
import ProjectCard from './components/ProjectCard';
import emergenceLogo from '../public/emergenceLogo.png';

export default function Work() {
  return (
    <VStack h="300vh" backgroundColor="black">
      <Homebar left="ABOUT" />
      <VStack>
        <ProjectCard
          name="Emergence"
          desc="Emergence is an on-chain video platform that distribute tokens during calls + generates a script for DAO documentation + increases DAO health and onboarding quality."
          live="https://ethglobal.com/showcase/emergence-o3tns"
          github="https://github.com/Emergence-Dapp/emergence"
          image="/emergenceLogo.png"
        />
        <ProjectCard
          name="Emergence"
          desc="Emergence is an on-chain video platform that distribute tokens during calls + generates a script for DAO documentation + increases DAO health and onboarding quality."
          live="https://ethglobal.com/showcase/emergence-o3tns"
          github="https://github.com/Emergence-Dapp/emergence"
          image="/emergenceLogo.png"
        />
        <ProjectCard
          name="Emergence"
          desc="Emergence is an on-chain video platform that distribute tokens during calls + generates a script for DAO documentation + increases DAO health and onboarding quality."
          live="https://ethglobal.com/showcase/emergence-o3tns"
          github="https://github.com/Emergence-Dapp/emergence"
          image="/emergenceLogo.png"
        />
      </VStack>
    </VStack>
  );
}
