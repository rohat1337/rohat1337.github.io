import { Card, CardHeader, Heading, Text, Image } from "@chakra-ui/react"

export default function ProjectCard(props) {
    return (
        <Card w="100%" h="100%" as={"button"} variant="elevated" borderRadius={15} shadow="lg" onClick={() => window.open(props.link, "_blank")} >
            <CardHeader bg="#393E46" borderTopRadius={10}>
                <Heading color="#EEEEEE" size="md">
                    {props.title}
                </Heading>
                <Text color="#EEEEEE" mt={3} size="sm">{props.desc}</Text>
            </CardHeader>
            <Image w="100%" h="100%" borderBottomRadius={10} src={props.img}/>
        </Card>
    )
}