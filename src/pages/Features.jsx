import { Container, VStack, Text, List, ListItem } from "@chakra-ui/react";

const Features = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Features & Advantages</Text>
        <List spacing={3}>
          <ListItem>★ Auto-reply to WhatsApp or WA Business</ListItem>
          <ListItem>★ Individually customizable</ListItem>
          <ListItem>★ Many automation tools included</ListItem>
          <ListItem>★ React to all messages when you're busy</ListItem>
          <ListItem>★ Send replies to specific messages</ListItem>
          <ListItem>★ Welcome message for new chats *</ListItem>
          <ListItem>★ Live answer replacements (time, name...)</ListItem>
          <ListItem>★ Multiple replies in one rule *</ListItem>
          <ListItem>★ Works with contacts, groups and unknown numbers</ListItem>
          <ListItem>★ Ignore and specify contacts and groups</ListItem>
          <ListItem>★ Automatic scheduler with delay</ListItem>
          <ListItem>★ AI with ChatGPT/GPT-3/GPT-4 or Dialogflow.com (formerly api.ai) *</ListItem>
          <ListItem>★ Backup rules for easy recovery</ListItem>
          <ListItem>★ Personal agent for your business</ListItem>
          <ListItem>★ Almost everything is possible with this bot!</ListItem>
          <ListItem>* Auto Assign Label: Automatically label numbers through the chatbot.</ListItem>
          <ListItem>* Auto follow-up prospect</ListItem>
          <ListItem>* Bulking message with image and video</ListItem>
          <ListItem>* Auto send message with image and video</ListItem>
          <ListItem>* Converse: Activate number with the automatic warm-up features</ListItem>
        </List>
      </VStack>
    </Container>
  );
};

export default Features;
