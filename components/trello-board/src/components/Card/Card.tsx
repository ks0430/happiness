import React, {Component} from 'react'
import { Button, Box, Text } from "@chakra-ui/react";

const Card = (props) => {
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
        cardDraggable
      } = props
    //   console.log(props);
    return (
        <Box bg="white" w="100%" p={4} color="white">
            <Text fontSize="xl" color='gray.500'>Test</Text>
            <Button colorScheme="blue">Button</Button>
        </Box>
    )
}

export default Card;
