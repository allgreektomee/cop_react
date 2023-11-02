
import {
    Box,
    Button,
    Stack,
    HStack, 
    IconButton,
    useDisclosure,
    LightMode,
    useColorMode,
    useColorModeValue,
    Text,

} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <Stack 
            justifyContent={"space-between"} 
            alignItems="center" 
            py={5} 
            px={{
                sm: "10",
                md: "40",
                }} 
            borderBottomWidth={1}
            direction={{
                // sm: "column",
                sm: "row",
                md: "row",
                }}
            spacing={{
                sm: 4,
                md: 0,
            }}
        >
            <HStack spacing={5}>
                <Link to={`/`}>
                    <Text>소셜모임</Text>
                </Link>
                <Link to={`/home`}>
                    <Text>소셜모임</Text>
                </Link>
                <Link to={`/home`}>
                    <Text>새소식</Text>
                </Link>
            </HStack>

        </Stack>

    );
    
}