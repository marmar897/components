import {React} from 'react'

class Message extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    renderMessage = () => {
        //help us render the right message string!
        if(this.props.sender){
            return` ${this.props.content} sent by ${this.props.sender}`
        } else {
            return this.props.content
        }
    }

    render() {
        console.log(this.props.content)
        if(this.props.content){
            return (
                <div> {this.renderMessage()}</div>
            )
        }
        else {
            return <div> this is a  default message! </div>
        }
    }
}
export default Message
