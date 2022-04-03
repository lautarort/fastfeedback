import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Button,
    Input,
    useToast,
    useDisclosure
} from '@chakra-ui/react';

import { createSite } from '../lib/db';
import { useAuth } from '../lib/auth';

const AddSiteModal = ({ children }) => {
    const toast = useToast();
    const auth = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { handleSubmit, register } = useForm();

    const onCreateSite = ({ name, url }) => {
        createSite({
            authorId: auth.user.uid,
            createdAt: new Date().toISOString(),
            name,
            url,
        });
        toast({
            title: 'Success!',
            description: "We've added your site.",
            status: 'success',
            duration: 5000,
            isClosable: true
        });
        onClose();
    }


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
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
                    <ModalHeader fontWeight="bold">Add Site</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input
                                id="site-input"
                                placeholder="My site"
                                name="name"
                                {...register('name', { required: true })}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input
                                id="link-input"
                                placeholder="https://website.com"
                                name="url"
                                {...register('url', { required: true })}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3} fontWeight="medium">
                            Cancel
                        </Button>
                        <Button
                            id="create-site-button"
                            backgroundColor="#99FFFE"
                            color="#194D4C"
                            fontWeight="medium"
                            type="submit"
                        >
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddSiteModal;