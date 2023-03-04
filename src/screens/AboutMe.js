import { Grid, GridItem, IconButton, Center, Text, Divider, Flex, Button, HStack } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { skills } from "./Skills"
import Skill from "../components/Skill"


export default function AboutMe(props) {

    function click () {
        props.onToggle()
        props.setSite(0)
    }

    function renderSkills() {
        const skillz = skills.map((skill) => {
            return (
                <GridItem justifySelf={"center"} alignSelf={"center"} colSpan={{base: 2, md: 2, lg: 1}}>
                    <Skill title={skill.title} img={skill.img}/>
                </GridItem>
            )
        })
        return skillz
    }

    function openGithub() {
        window.open("https://github.com/rohat1337", "_blank")
    }

    function openLinkedin() {
        window.open("https://www.linkedin.com/in/rohat-bedikanli-086b6a178/", "_blank")
    }

    return (
        <Grid
        templateRows="repeat(10, 1fr)"
        h="100vh" >
            <GridItem rowSpan={1} bg="#393E46">
                <IconButton 
                    icon={<ChevronDownIcon />} 
                    size="lg" 
                    w={"100%"} 
                    variant="ghost" 
                    colorScheme={"teal"} 
                    h={"100%"}
                    onClick={() => click()} />
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} h='100%' w='100%' bg="#393E46">
                    <Center flexDirection="column">
                        <Text mb={15} color="#EEEEEE" fontSize="5xl" >About me</Text>
                        <Divider size={"sm"} w="80%" />

                    </Center>
            </GridItem>
            <GridItem rowSpan={6} bg='#222831'>
                <Grid templateColumns={"repeat(5, 1fr)"}
                h="100%"
                overflowY="scroll"
                mt={20}
                >
                    <GridItem colSpan={{ base: 5, lg: 2}} >
                        <Flex flexDirection="column"alignItems={"center"} justifyContent="space-evenly" h="80%">
                            <Text color="#EEEEEE" fontSize="5xl">Rohat Bedikanli</Text>
                            <Text color="#EEEEEE" fontSize="xl">Software engineer based in Gävle, Sweden.</Text>
                            <Text color="#EEEEEE" fontSize="xl">Bachelor of Science (Technology), Uppsala University</Text>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={{ base: 5, lg: 3}}>
                        
                        <Grid
                        templateColumns="repeat(4, 1fr)"
                        templateRows="repeat(2, 1fr)"
                        h="80%"
                        w="100%"
                        mt={0}
                        >
                            {renderSkills()}
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={5} justifyContent="center" mt={20}>
                        <HStack gap={10} justifyContent="center" alignItems="center" mb={{base: 10, lg: 0}}>
                            <Button onClick={() => openLinkedin()} colorScheme="linkedin" leftIcon={<FaLinkedin />}>LinkedIn</Button>
                            <Button onClick={() => openGithub()} colorScheme="gray" leftIcon={<FaGithub />}>GitHub</Button>
                        </HStack>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    )
}