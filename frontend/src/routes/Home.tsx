
import Cookie from "js-cookie";
import { FaStar, FaRegHeart } from "react-icons/fa";
import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Skeleton, 
  SkeletonText
} from "@chakra-ui/react";


import ClassSkeleton from "../components/ClassSkeleton";
import { start } from "repl";
import Banner from "../components/Banner"
import { useQuery } from "@tanstack/react-query";



import { useEffect, useState } from "react";

import AgtmClass from "../components/AgtmClass";


interface IPhoto {
  pk: string;
  file: string;
  description: string;
}

interface IOwner {
  img: string;
  username: string;
  email: string;
}

interface IClass {
  pk: number;
  title: string;
  subtitle:string;
  place:string;
  address: string;
  price: number;
  start:string;
  end: string;
  owner:IOwner[];
  is_liked:boolean;
  photos: IPhoto[];
}

// interface IPhoto {
//   pk: string;
//   file: string;
//   description: string;
// }

// interface IRoom {
//   pk: number;
//   name: string;
//   country: string;
//   city: string;
//   price: number;
//   rating: number;
//   is_owner: boolean;
//   photos: IPhoto[];
// }


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [classList, setClassList] = useState<IClass[]>([]);
  const fetchClassList = async () => {
    const response = await fetch("/api/v1/class/@devcation",
    {headers: {
      "X-CSRFToken": Cookie.get("csrftoken") || "",
    },});
    const json = await response.json();
    console.log(json)
    setClassList(json);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchClassList();
  }, []);

  return (
    <Stack>
      <Banner/>

      <VStack  
          mt={10}
          px={{
            base: 10,
            lg: 40,
          }}
          alignItems={"start"}
        
          >
          <Text fontSize="2xl" as="b">
            👻 00모임
          </Text>
          <Text>
              와린이 와린이와린이 와린이와린이 와린이와린이 와린이와린이 와린이
              와린이 와린이와린이 와린이와린이 와린이
          </Text>
      </VStack>
     

      <Grid
        mt={10}
        px={{
          base: 10,
          lg: 40,
        }}
        columnGap={4}
        rowGap={8}
        templateColumns={{
          sm: "1fr 1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
      >
        {isLoading ? (
        <>
          <ClassSkeleton />
          <ClassSkeleton />
          <ClassSkeleton />
          <ClassSkeleton />
          <ClassSkeleton />
          <ClassSkeleton />
          <ClassSkeleton />
          <ClassSkeleton />
          <ClassSkeleton />
          <ClassSkeleton />
        </>
      ) : null}

    {classList.map((agtmClass) => (
        <AgtmClass
          imageUrl={agtmClass.photos[0].file}
          title={agtmClass.title}
          address={agtmClass.address}

        />
      ))}
      </Grid>
    </Stack>
  );
}