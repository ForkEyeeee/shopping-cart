import { Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const LinkWrapper = ({ to, icon, label }) => {
  return (
    <Link
      as={ReactRouterLink}
      to={to}
      px={2}
      py={1}
      borderRadius="full"
      transition="all 0.3s"
      _hover={{
        transform: "scale(1.05)",
        bg: "blue.700",
        textDecoration: "none",
      }}
      _active={{
        transform: "scale(0.95)",
      }}
      display="flex"
      alignItems="center"
    >
      <Box as={icon} mr={1} boxSize="16px" />
      <Text fontSize="sm" fontWeight="semibold">
        {label}
      </Text>
    </Link>
  );
};

LinkWrapper.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default LinkWrapper;
