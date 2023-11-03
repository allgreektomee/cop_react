import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getClassDetail , getClassReviews} from "../api";
import { IClassDetail, IReview } from "../types";
import SplitWithImage  from "../components/SplitWithImage";
import { FaStar } from "react-icons/fa";

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
  // const { isLoading, data } = useQuery<IClassDetail>({ queryKey: ['classPk'], queryFn: getClassDetail });

  const { isLoading, data } = useQuery([`class`, classPk], getClassDetail);
  const { data: reviewsData, isLoading: isReviewsLoading } = useQuery<
    IReview[]
  >([`class`, classPk, `reviews`], getClassReviews);

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
      

      

      <Box mt={10}>
        <Heading fontSize={"2xl"}>
          <HStack>
            <FaStar /> <Text>5.0</Text>
            <Text>∙</Text>
            <Text>
              {reviewsData?.length} review{reviewsData?.length === 1 ? "" : "s"}
            </Text>
          </HStack>
        </Heading>
      </Box>

      <Container mt={16} maxW="container.lg" marginX="none">
        
          <Grid gap={10} templateColumns={"1fr 1fr"}>
            {reviewsData?.map((review, index) => (
              <VStack alignItems={"flex-start"} key={index}>
                <HStack>
                  <Avatar
                    name={review.user.username}
                    src={review.user.img}
                    size="md"
                  />
                  <VStack spacing={0} alignItems={"flex-start"}>
                    <Heading fontSize={"md"}>{review.user.username}</Heading>
                    <HStack spacing={1}>
                      <FaStar size="12px" />
                      <Text>{review.rating}</Text>
                    </HStack>
                  </VStack>
                </HStack>
                <Text>{review.comment}</Text>
              </VStack>
            ))}
          </Grid>
        </Container>

    </Box>
   
  );

}