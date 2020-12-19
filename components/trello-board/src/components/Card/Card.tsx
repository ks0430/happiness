import React, { Component } from 'react'
import {
    Button,
    Box,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'

const Card = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {
        showDeleteButton,
        style,
        tagStyle,
        onClick,
        onDelete,
        className,
        id,
        title,
        label,
        description,
        tags,
        cardDraggable,
    } = props

    //   console.log(props);
    return (
        <Box onClick={onOpen} bg="white" w="100%" p={4} color="white">
            <Text fontSize="xl" color="gray.500">
                {title}
            </Text>
            <Text fontSize="md" color="gray.500">
                {description}
            </Text>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text fontSize="xl" color="gray.500">
                            Test
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Card
