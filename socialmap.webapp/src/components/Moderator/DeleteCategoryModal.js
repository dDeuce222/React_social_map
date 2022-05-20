import {
    Box, Button, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader,
    ModalOverlay,
    Text
} from "@chakra-ui/react";
import WarningButton from "../Buttons/WarningButton";



export default function DeleteCategoryModal(props) {

    const handleDelete =() => {
        alert("delete!")
        props.onClose()
    }

    return (
        <Box>
            <Modal blockScrollOnMount={false} isOpen={props.isOpen} onClose={props.onClose} isCentered> 
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete category?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack>
                            <Text fontWeight='bold'>
                                ID:
                            </Text>
                            <Text>
                                {props.id}
                            </Text>
                        </HStack>
                        <HStack mt={2}>
                            <Text fontWeight='bold'>
                                Name
                            </Text>
                            <Text>
                                {props.name}
                            </Text>
                        </HStack>
                    </ModalBody>

                    <ModalFooter>
                        <WarningButton mr={3} onClick={() => handleDelete()}>
                            Yes
                        </WarningButton>
                        <Button onClick={props.onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}