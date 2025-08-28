

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
import Banner from "../components/Banner"
import { useQuery } from "@tanstack/react-query";



import AgtmClass from "../components/AgtmClass";
import { getClassList } from "../api";
import { IClass } from "../types";



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
  // const [isLoading, setIsLoading] = useState(true);
  // const [classList, setClassList] = useState<IClass[]>([]);
  // const fetchClassList = async () => {
  //   const response = await fetch("/api/v1/class/@devcation",
  //   {headers: {
  //     "X-CSRFToken": Cookie.get("csrftoken") || "",
  //   },});
  //   const json = await response.json();
  //   console.log(json)
  //   setClassList(json);
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   fetchClassList();
  // }, []);



  const { isLoading, data } = useQuery<IClass[]>({ queryKey: ['class'], queryFn: getClassList })

  return (
    <Stack  paddingBottom={100}>
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
            👻 우리 클래스
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

    {data?.map((agtmclass) => (
        <AgtmClass
          pk={agtmclass.pk }
          imageUrl={agtmclass.photos[0].file}
          title={agtmclass.title}
          address={agtmclass.address}

        />
      ))}
      </Grid>
    </Stack>
  );
}