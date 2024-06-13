import { Metadata } from "next"
import { Box, Heading, Image } from "@chakra-ui/react";

export const metadata: Metadata = {
	title: 'Page NotFound',
    description: 'Страница, которую вы ищете, не найдена. Пожалуйста, проверьте URL-адрес или вернитесь на домашнюю страницу.',
}

export default function PageNotFound() {
    return (
        <Box textAlign="center" mt={10}>
            <Heading as="h1" fontSize="4xl" mb={4}>Уууупс! Кажется, 404</Heading>
            <Image src="/404.svg" alt="404" maxW="400px" mx="auto" />
        </Box>
    );
  }