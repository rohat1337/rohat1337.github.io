export class Parser {
    constructor(props) {
        this.props = props
    }

    parse(command, params) {
        switch (command) {
            case "goto":
                return this.parseGoTo(params)
        
            default:
                break;
        }
    }

    parseGoTo(params) {
        const allowedSites = [1, 2]
        if (!allowedSites.includes(params)) {
            return `${params} is not a valid site!`
        } else {
            this.props.setSite(params)
        }
    }

}