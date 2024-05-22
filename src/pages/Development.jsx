import { Box, Heading, Text } from "@chakra-ui/react";

function Development() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={4}>
        Autoresponder Web Application Development
      </Heading>
      <Text fontSize="lg" mb={2}>
        Objective: Develop a web-based autoresponder application akin to Wasapbot that can automatically reply to messages with minimal delay.
      </Text>
      <Heading as="h2" size="lg" mt={4} mb={2}>
        Functional Requirements:
      </Heading>
      <Text fontSize="md" mb={1}>
        - User Management: Ability to register and manage user accounts, including login, password recovery, and profile settings.
      </Text>
      <Text fontSize="md" mb={1}>
        - Message Handling: Receive messages from various platforms (e.g., WhatsApp, Facebook Messenger) and process them accordingly.
      </Text>
      <Text fontSize="md" mb={1}>
        - Autoresponse Logic: Implement AI-driven logic to generate contextually relevant responses based on the received message content.
      </Text>
      <Text fontSize="md" mb={1}>
        - Customization: Provide users with the option to customize response templates and set rules for autoresponses.
      </Text>
      <Text fontSize="md" mb={1}>
        - Analytics: Track and display usage statistics, response times, and user engagement metrics.
      </Text>
      <Text fontSize="md" mb={1}>
        - Integration: Ensure compatibility with major messaging platforms and APIs for seamless integration.
      </Text>
      <Text fontSize="md" mb={1}>
        - Security: Implement robust security measures to protect user data and prevent unauthorized access.
      </Text>
      <Heading as="h2" size="lg" mt={4} mb={2}>
        Non-Functional Requirements:
      </Heading>
      <Text fontSize="md" mb={1}>
        - Performance: The system should handle a high volume of messages with minimal latency.
      </Text>
      <Text fontSize="md" mb={1}>
        - Scalability: Design the architecture to be scalable to accommodate a growing number of users and messages.
      </Text>
      <Text fontSize="md" mb={1}>
        - Reliability: Ensure a high level of uptime and quick recovery from any failures.
      </Text>
      <Text fontSize="md" mb={1}>
        - User Experience: The interface should be intuitive and user-friendly, allowing for easy navigation and management of autoresponder settings.
      </Text>
      <Heading as="h2" size="lg" mt={4} mb={2}>
        Development Stages:
      </Heading>
      <Text fontSize="md" mb={1}>
        - Requirement Analysis: Gather detailed requirements from stakeholders and define the scope of the project.
      </Text>
      <Text fontSize="md" mb={1}>
        - Design: Create wireframes and design the system architecture.
      </Text>
      <Text fontSize="md" mb={1}>
        - Implementation: Develop the application using the GPT Engineer App, focusing on the core functionalities first.
      </Text>
      <Text fontSize="md" mb={1}>
        - Testing: Perform thorough testing to identify and fix any bugs or issues.
      </Text>
      <Text fontSize="md" mb={1}>
        - Deployment: Deploy the application to a production environment and monitor its performance.
      </Text>
      <Text fontSize="md" mb={1}>
        - Maintenance: Provide ongoing support and updates to the application.
      </Text>
    </Box>
  );
}

export default Development;
