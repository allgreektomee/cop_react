import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { IoStopwatchOutline, IoLocationOutline, IoAccessibilityOutline } from 'react-icons/io5'
  import { ReactElement } from 'react'
  
  interface FeatureProps {
    text: string
    iconBg: string
    icon?: ReactElement
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={5} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    )
  }
  

interface ISplitProps {
    imageUrl: string;
    title: string;
    place: string;
    start:string;
    end:string;
    subtitle:string;
    headcount:Number;
}

export default function SplitWithImage({

    imageUrl ,
    title,
    place,
    start,
    end,
    subtitle,
    headcount,
  }: ISplitProps)  {

    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text>
            <Heading>{title}</Heading>
            <Text color={'gray.500'} fontSize={'lg'} paddingBottom={5}>
              {subtitle}
            </Text>
            <Stack
              paddingBottom={5}
              spacing={4}
              // divider={
              //   <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              // }
              >
     
              <Feature
                icon={<Icon as={IoStopwatchOutline} color={'blue.500'} w={5} h={5} />}
                iconBg={useColorModeValue('white.100', 'white.900')}
                text={'20:00 ~ 24:00  '}
              />
              <Feature
                icon={<Icon as={IoLocationOutline} color={'blue.500'} w={5} h={5} />}
                iconBg={useColorModeValue('white.100', 'white.900')}
                text={'신촌 '+place}
              />
              <Feature
                icon={<Icon as={IoAccessibilityOutline} color={'blue.500'} w={5} h={5} />}
                iconBg={useColorModeValue('white.100', 'white.900')}
                text={'정원'+headcount+'명'}
              />
          
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                imageUrl
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }