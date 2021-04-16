import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jessica Marques</Text>
          <Text>jessica.marques.dev@gmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Jessica Marques"
        src="https://github.com/jessicaMarquess.png"
      />
    </Flex>
  );
}
