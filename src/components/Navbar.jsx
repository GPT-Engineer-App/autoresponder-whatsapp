import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack spacing={4} padding={4} justifyContent="center">
      <Button as={Link} to="/" colorScheme="teal">
        Home
      </Button>
      <Button as={Link} to="/features" colorScheme="teal">
        Features
      </Button>
    </HStack>
  );
};

export default Navbar;
