import {
    FormErrorMessage,
    Badge,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Textarea,
    Select,
    Switch,
    SimpleGrid,
    IconButton,
    VStack,
    Center,
    Spacer
} from '@chakra-ui/react';
import EditButton from '../Buttons/EditButton';
import {Link as RouterLink, useNavigate} from "react-router-dom";
import WarningButton from '../Buttons/WarningButton';

export default function CategoryModerator(props) {

    const navigate = useNavigate();

    const redirectToEdit = (id) => {
        navigate("editcategory", {state: {categoryId: id}})
    }

    const handleDelete = () => {
        props.setCategoryIdToDelete(props.id);
        props.setCategoryNameToDelete(props.name);
        props.onOpen();
    }

    return (
        <Box mt={3}>
            <Stack bgColor={'gray.600'} border={'1px'} borderColor={'transparent'} rounded={'lg'} px={5} py={2}>
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <HStack alignItems={"baseline"}>
                        <Text color={"gray.300"}>#{props.id}</Text>
                    </HStack>
                    <HStack width={"50%"} alignItems={"baseline"} ml={"10px"}>
                        <Text color={"gray.300"} fontSize={"12px"}>Name:</Text>
                        <Box width={"100%"}>
                            <Text>{props.name}</Text>
                        </Box>
                    </HStack>
                    <Flex ml="auto" gap={"5px"} flexDirection={{ base: "column", md: "row" }}>
                        <EditButton height={"30px"} width={"80px"} 
                        onClick={() => redirectToEdit(props.id)}>
                            Edit
                        </EditButton>
                        <WarningButton height={"30px"} width={"80px"} onClick={() => handleDelete()}>Delete</WarningButton>
                    </Flex>
                </Flex>
            </Stack>
        </Box>
    );
}