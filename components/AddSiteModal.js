import { useRef } from 'react'
import { useForm } from 'react-hook-form';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    FormControl,
    FormLabel,
    ModalCloseButton,
    Button,
    Input,
    useDisclosure

} from '@chakra-ui/react'

const AddSiteModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = useRef();

    return (
        <>
            <Button
                backgroundColor="gray.900"
                color="white"
                fontWeight="medium"
                _hover={{ bg: 'gray.700' }}
                _active={{
                    bg: 'gray.800',
                    transform: 'scale(0.95)'
                }}
                onClick={onOpen}> + Add Site</Button>


            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input ref={initialRef} placeholder='My site name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input placeholder='https://website.com' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' >
                            Create
                        </Button>
                        <Button onClick={onClose} mr={3}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddSiteModal;
