import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getClassDetail } from "../api";
import { IClassDetail } from "../types";
import SplitWithImage  from "../components/SplitWithImage"

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Skeleton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Center,
  Stack,
  Avatar,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";



export default function ClassDetaill() {
  const { classPk   } = useParams();
  const { isLoading, data } = useQuery<IClassDetail>({ queryKey: [classPk], queryFn: getClassDetail });
  return (
    <Box
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      paddingBottom={100}
    
     
    >
 

      
      <SplitWithImage 
        imageUrl={data?.photos[0].file as string} 
        title={data?.title as string} 
        place={data?.place as string}
        start={data?.start as string}
        end={data?.end as string}
        subtitle={data?.subtitle as string} 
        headcount={data?.headcount as Number}
        
      />

     
      
      <Container maxW={'5xl'} py={0}>
      
      <HStack alignItems={"center"} justifyContent={"start"} >
        
        <Avatar name={data?.owner.username} src={data?.owner.img} />
        <Heading  size='md'>{data?.owner.username}</Heading>
      
      </HStack>

    
      
      <VStack alignItems={"start"} justifyContent={"start"} py={10} >

        <Skeleton height={"50px"} isLoaded={!isLoading}>
        <Heading  size='md'>
          모임 소개 
        </Heading>
        </Skeleton>
          
        <Skeleton height={"50px"} isLoaded={!isLoading}>
          <Text>{data?.description}</Text>
        </Skeleton>
      </VStack>


      
    
      </Container>
 
    </Box>
   
  );

}