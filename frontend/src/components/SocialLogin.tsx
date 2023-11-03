import { FaComment, FaGithub } from "react-icons/fa";
import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";

export default function SocialLogin() {

  const kakaoParams = {
    client_id: "6f5fded5e4356bf8144049bf34edbd1d",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?${new URLSearchParams(
    kakaoParams
  ).toString()}`;

  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text textTransform={"uppercase"} color="gray.500" fontSize="xs" as="b">
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        {/* <Button w="100%" leftIcon={<FaGithub />} colorScheme={"telegram"}>
          Continue with Github
        </Button> */}
        <Button
          as="a"
          href={kakaoUrl}
          w="100%"
          leftIcon={<FaComment />}
          colorScheme={"yellow"}
        >
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}