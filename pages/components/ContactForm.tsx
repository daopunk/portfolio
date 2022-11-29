import Link from 'next/link';
import { useState } from 'react';
import { Stack, VStack, Flex, Text } from '@chakra-ui/layout';
import {
  FormControl,
  FormLabel,
  Input,
  InputLeftAddon,
  InputRightAddon,
  InputGroup,
  Button,
  Textarea,
} from '@chakra-ui/react';

const ContactForm = (props: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <VStack py="50px">
      <Text fontWeight="extrabold" className="neonYy">
        Let's Collaborate.
      </Text>
      <FormControl py="15px">
        <Stack w="60vw" py="10px">
          <InputGroup size="sm">
            <InputLeftAddon children="Name" />
            <Input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              name="name"
            ></Input>
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon children="Email" />
            <Input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
            ></Input>
            <InputRightAddon children=".com" />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon children="Subject" />
            <Input
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              name="subject"
            ></Input>
          </InputGroup>
        </Stack>
        <FormLabel>Message</FormLabel>
        <Textarea
          maxH="250px"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          name="message"
        ></Textarea>
      </FormControl>
      <Button isLoading={props.isSubmitting} className="neonY" type="submit">
        Submit
      </Button>
    </VStack>
  );
};

export default ContactForm;
