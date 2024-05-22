import { useState } from "react";
import { Container, VStack, Text, Input, Button, HStack, IconButton, useToast } from "@chakra-ui/react";
import Navbar from "../components/Navbar.jsx";
import { FaWhatsapp } from "react-icons/fa";

const Index = () => {
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handleSendMessage = () => {
    if (message.trim() === "") {
      toast({
        title: "Error",
        description: "Message cannot be empty.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate sending message
    toast({
      title: "Message Sent",
      description: `Your message: "${message}" has been sent!`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Clear the input field
    setMessage("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Navbar />
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">WhatsApp Autoresponder</Text>
        <Input placeholder="Type your message here..." value={message} onChange={(e) => setMessage(e.target.value)} size="lg" />
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg" onClick={handleSendMessage}>
            Send Message
          </Button>
          <IconButton aria-label="Send via WhatsApp" icon={<FaWhatsapp />} colorScheme="whatsapp" size="lg" onClick={handleSendMessage} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
