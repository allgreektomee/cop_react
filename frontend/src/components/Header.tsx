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
    Avatar,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useToast,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { logOut } from "../api";

import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import useUser from "../lib/useUser";

export default function Header() {
    const { userLoading, isLoggedIn, user } = useUser();
    const { toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("blue.500", "blue.300");
    const Icon = useColorModeValue(FaMoon, FaSun);
    const queryClient = useQueryClient();

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

    const toast = useToast();
    const onLogOut = async () => {
    const toastId = toast({
        title: "Login out...",
        description: "Sad to see you go...",
        status: "loading",
        position: "bottom-right",
    });

    /* const data = await logOut();
    console.log(data); */
    setTimeout(() => {
        toast.update(toastId, {
        status: "success",
        title: "Done!",
        description: "See you later!",
        });
    }, 5000);
    };

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
                <Text fontSize={30}> 우리오더 </Text>
                </Link>
            </Box>

            <HStack spacing={2}>
            
                <IconButton
                    onClick={toggleColorMode}
                    variant={"ghost"}
                    aria-label="Toggle dark mode"
                    icon={<Icon />}
                />
                {!userLoading ? (
                    !isLoggedIn ? (
                        <>
                        <Button onClick={onLoginOpen}>Log in</Button>
                        <LightMode>
                            <Button onClick={onSignUpOpen} colorScheme={"blue"}>
                                Sign up
                            </Button>
                       
                        </LightMode>
                        </>
                    ) : (
                        <Menu>
                            <MenuButton>
                                <Avatar name={user?.username} src={user?.img} size={"md"} />
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={onLogOut}>Log out</MenuItem>
                            </MenuList>
                        </Menu>
                    )
                    ) : null}
                
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
        </Stack>
   
    );
}