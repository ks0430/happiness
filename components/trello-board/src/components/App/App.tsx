import Table from '../Board'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
    return (
        <ChakraProvider>
            <Table />
        </ChakraProvider>
    )
}

export default App
