import Link from 'next/link';
import {
  Flex,
  Box,
  Card,
  CardBody,
  CardHeader,
  Text,
  Heading,
  Divider,
  Button,
  Image,
} from '@chakra-ui/react';

const ProjectCard = (props: any) => {
  const { name, desc, live, github, image } = props;

  return (
    <Card maxW="md">
      <CardHeader>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Box>
            <Heading size="sm">{name}</Heading>
          </Box>
        </Flex>
      </CardHeader>

      <Image
        background="black"
        objectFit="cover"
        boxSize="md"
        src={image}
        alt="project cover image"
      />
      <CardBody>
        <Text>{desc}</Text>
        <Divider my="5px" />
        <Flex justify="space-evenly">
          <Link href={live} target="_blank">
            <Button variant="ghost">Live Demo</Button>
          </Link>
          <Link href={github} target="_blank">
            <Button variant="ghost">Source Code</Button>
          </Link>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
