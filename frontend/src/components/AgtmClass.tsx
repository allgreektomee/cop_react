
import { FaRegHeart, FaStar } from "react-icons/fa";
import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
  Stack,
} from "@chakra-ui/react";

interface IClassProps {
  imageUrl: string;
  title: string;
  address: string;
}

export default function AgtmClass({
  imageUrl,
  title,
  address,
}: IClassProps) {

 


  const gray = useColorModeValue("gray.600", "gray.300");
  return (

     
    <VStack alignItems={"flex-start"} >
    
        <Box position="relative" overflow={"hidden"} mb={3} rounded="2xl" backgroundColor={"white"}>
            {/* <Image
            minH="230"
            src="https://imagedelivery.net/H4jrBT7_U0Ji_5U964zJAw/91f7f08b-027d-4c88-411d-67a1d4770e00/public"
            /> */}
            <Image minH="280" src={imageUrl} />
            <Button
            variant={"unstyled"}
            position="absolute"
            top={0}
            right={0}
            color="white"
            >
            <FaRegHeart size="20px" />
            </Button>
        </Box>
        

        <Box>
            <Grid gap={2} templateColumns={"6fr 1fr"}>
            <Text display={"block"} as="b" noOfLines={1} fontSize="md">
               {title}
            </Text>
            <HStack spacing={1} alignItems="center">
                <FaStar size={12} />
                <Text fontSize={"sm"}>5.0</Text>
            </HStack>
            </Grid>

            <Text fontSize={"sm"} color={gray}>
              {address}
            </Text>
        </Box>

        <Text fontSize={"sm"} color={gray}>
            <Text as="b">매주 토요일 17:00 - 22:00 </Text> / night 
        </Text>


    </VStack>

    
  );
}