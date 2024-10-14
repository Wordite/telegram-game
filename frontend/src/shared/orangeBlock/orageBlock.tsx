import { twc, TwcComponentProps } from 'react-twc'
import './orangeBlock.css'

interface IOrangeBlockProps extends TwcComponentProps<'div'> {
  isHaveGlitter?: boolean
  isEven?: boolean
}

const OrangeBlock = twc.div<IOrangeBlockProps>((props) => [
    'orange-block flex items-center justify-center ',
    props.isHaveGlitter ? 'orange-block-with-glitter' : '',
    props.isEven ? 'orange-block-even' : ''
])


export default OrangeBlock