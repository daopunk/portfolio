import { useState, MouseEvent } from 'react';
import { sendContactForm } from './api/firebase';
import Homebar from './components/Homebar';
import Footer from './components/Footer';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Stack, VStack, Text } from '@chakra-ui/layout';
import {
  FormControl,
  FormLabel,
  Button,
  Textarea,
  Alert,
  AlertIcon,
  AlertDescription,
  useMediaQuery,
} from '@chakra-ui/react';

export default function Contact() {
  const [isLessThan900] = useMediaQuery('(max-width: 900px)');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submit, setSubmit] = useState(false);
  const [verify, setVerify] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [isSubmitting, setIsSubmit] = useState(false);

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
    if (verify) {
      setIsSubmit(true);
      const res = await sendContactForm({
        name,
        email,
        subject,
        message,
      });
      if (res == 0) {
        setSuccess(true);
        setIsSubmit(false);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        console.log('Send contact error!');
        setFail(true);
      }
    }
  };

  return (
    <VStack h="125vh" backgroundColor="black">
      <Homebar right="ABOUT" />
      <VStack py="50px">
        <Text fontWeight="medium" className="neonText" py="15px" fontSize="20">
          Let's Collaborate.
        </Text>
        {!verify && submit && (
          <Alert status="error" variant="top-accent">
            <AlertIcon />
            <AlertDescription>Please fill in all fields!</AlertDescription>
          </Alert>
        )}
        {success && !fail && (
          <Alert status="success" variant="top-accent">
            <AlertIcon />
            <AlertDescription>
              Message was successfully submitted!
            </AlertDescription>
          </Alert>
        )}
        {!success && fail && (
          <Alert status="error" variant="top-accent">
            <AlertIcon />
            <AlertDescription>
              I stopped paying for Firebase!! Just send me an email ;)
            </AlertDescription>
          </Alert>
        )}
        <FormControl>
          <Stack w={isLessThan900 ? '90vw' : '60vw'} py="10px">
            <InputGroup size="md">
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
            <InputGroup size="md">
              <InputLeftAddon children="Email" />
              <Input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
              ></Input>
            </InputGroup>
            <InputGroup size="md">
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
          isLoading={isSubmitting}
          className="neonText"
          type="submit"
          onClick={(e) => handleSubmit(e)}
          fontWeight="medium"
          fontSize="20"
        >
          Submit
        </Button>
      </VStack>
      <Footer />
    </VStack>
  );
}
