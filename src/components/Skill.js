import { Center, Text, Image } from "@chakra-ui/react";

export default function Skill(props) {
    return (
        <Center flexDirection="column">
            <Image src={props.img} w="50px" h="50px" />
            <Text color="#EEEEEE" mt={5} alignSelf="center" >{props.title}</Text>
        </Center>
    )
}