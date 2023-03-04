import Projects from "./Projects"
import AboutMe from "./AboutMe"
import { Slide } from "@chakra-ui/react"

export default function Site(props) {

    function renderSite(site) {
        switch (site) {
            case 1:
                return (
                    <Projects setSite={props.setSite} onToggle={props.onToggle} />
                )

            case 2: 
                return (
                    <AboutMe setSite={props.setSite} onToggle={props.onToggle} />
                )
            default:
                return null
        }
    }

    return (
        <Slide in={props.isOpen} direction="bottom" style={{ zIndex: 20}} >
            { renderSite(props.site) }
        </Slide>
    )
}