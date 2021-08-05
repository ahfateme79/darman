import {Texts,Topic,TopicPara} from './topic'

export const TopicSec=(props)=>{
    return(
        <Texts width={props.width} >
            <Topic>{props.topic}</Topic>
            <TopicPara padding={props.padding}>{props.para}</TopicPara>
        </Texts>
    )
}
export default TopicSec