import { useState, MouseEvent } from 'react';
import { sendContactForm } from '../api/firebase';
import { Stack, VStack, Text } from '@chakra-ui/layout';
import { FormControl, FormLabel, Button, Textarea } from '@chakra-ui/react';
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/input';

const ContactForm = (props: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);
  const [verify, setVerify] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const handleValidation = () => {
    setSubmit(true);
    if (!name.length || !email.length || !subject.length || !message.length) {
      setVerify(false);
    } else setVerify(true);
  };

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    setSubmit(false);
    setSuccess(false);
    setFail(false);
    handleValidation();
    if (!verify) {
      console.log('Fill in all inputs!');
    } else {
      const res = await sendContactForm({
        name,
        email,
        message,
      });
      if (res == 0) {
        console.log(name, email, subject, message);
        setSuccess(true);
      } else {
        console.log('Send contact error!');
        setFail(true);
      }
    }
  };

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
      <Button
        isLoading={props.isSubmitting}
        className="neonY"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Submit
      </Button>
      {!verify && submit && <Text>Please fill in all fields.</Text>}
      {success && !fail && <Text>Message was successfully submitted!</Text>}
      {!success && fail && (
        <Text>Message submission Error! Please try again.</Text>
      )}
    </VStack>
  );
};

export default ContactForm;
