import { ReactTerminal } from "react-terminal"
import "./Terminal.css"
import { Parser } from "./Parser"
import React from "react"

export default function Terminal(props) {

    const parser = new Parser(props);

    const welcomeMessage = (
        <span>
            Hello, and welcome to my portfolio! <br />
            Enter <span className="commandName">all</span> to see available commands! <br />
        </span>
    )

    const allCommands = (
        <span>
            <br />
            <span className="commandName" >goto x : navigate to page x. <br /> <br/></span>
            Available sites: <br />
            1 : Projects <br />
            2 : About me <br /><br />
            ------------------------------------- <br /><br/>
            <span className="commandName" >clear: clear the console.<br /> <br/></span>
            ------------------------------------- <br />
        </span>
    )

    const commands = {
        all: allCommands,
        goto: (index) => parser.parse("goto", parseInt(index))
    }

    return (
        <div className="terminal">
            <ReactTerminal
              themes={{
                "my-custom-theme": {
                  themeBGColor: "#393E46",
                  themeToolbarColor: "#DBDBDB",
                  themeColor: "#00ADB5",
                  themePromptColor: "#EEEEEE",
                }
              }}
              theme="my-custom-theme"
              welcomeMessage={welcomeMessage}
              commands={commands}
              showControlBar={false}
            />
        </div>
    )
}