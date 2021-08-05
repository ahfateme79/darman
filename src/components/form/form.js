import { Buttons } from '../buttons/button'
import { Form, Input } from './formstyle'


const Forms = (props) => {
    return (
        <Form>
            <Buttons btnColor="primary" textColor="transparent" btnBoredr="none">{props.btntext}</Buttons>
            <Input type="text" placeholder='شماره همراه را وارد کنید' />
        </Form>
    )
}
export default Forms