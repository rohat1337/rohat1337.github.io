import { Grid, GridItem, IconButton, Text, Center, Divider } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import ProjectCard from "../components/ProjectCard"
import { projects } from "../components/ProjectInfo"

export default function Projects(props) {
    function click () {
        props.onToggle()
        props.setSite(0)
    }

    function renderCards() {
        const cards = projects.map((project) => {
            return (
                <GridItem justifySelf={"center"} w="350px" h="50vh" alignSelf={"center"} colSpan={{ base: 2, md: 2, lg: 1}}>
                    <ProjectCard title={project.title} desc={project.desc} img={project.img} link={project.link}/>
                </GridItem>
            )
        })
        return cards
    }

    return (
            <Grid 
            templateRows="repeat(10, 1fr)" 
            templateColumns="repeat(1, 1fr)" 
            h="100vh" >
                <GridItem rowSpan={1} bg='#393E46'>
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
                        <Text mb={15} color="#EEEEEE" fontSize="5xl" >My Projects</Text>
                        <Divider size={"sm"} w="80%" />

                    </Center>
                </GridItem>
                <GridItem rowSpan={6} bg='#222831'>
                    

                    <Grid
                    templateColumns={"repeat(2, 1fr)"}
                    h="100%"
                    gap={10}
                    overflowY="scroll"
                    mt={10}
                    >

                        
                        {renderCards()}
                    </Grid>

                </GridItem>
            </Grid>
    )
}