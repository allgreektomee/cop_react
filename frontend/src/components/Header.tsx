import { FaWineBottle, FaMoon, FaSun } from "react-icons/fa";

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
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
    const { toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("blue.500", "blue.300");
    const Icon = useColorModeValue(FaMoon, FaSun);

    const {
        isOpen: isLoginOpen,
        onClose: onLoginClose,
        onOpen: onLoginOpen,
      } = useDisclosure();
      const {
        isOpen: isSignUpOpen,
        onClose: onSignUpClose,
        onOpen: onSignUpOpen,
      } = useDisclosure();

    return (

        <Stack 
            justifyContent={"space-between"} 
            alignItems="center" 
            py={5} 
            px={{
                sm: "10",
                md: "40",
              }} 
            
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
        
            <Box color={logoColor}>
                <Link to={"/"}>
                {/* <FaWineBottle size={"48"} /> */}
                <Text fontSize={30}> ㅅㅊㅇㅎ</Text>
                </Link>
            </Box>

            <HStack spacing={2}>
            
                <IconButton
                    onClick={toggleColorMode}
                    variant={"ghost"}
                    aria-label="Toggle dark mode"
                    icon={<Icon />}
                />
                <Button onClick={onLoginOpen}>Log in</Button>
                <Button onClick={onSignUpOpen} colorScheme={"blue"}>Sign up</Button>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </Stack>
   
    );
}