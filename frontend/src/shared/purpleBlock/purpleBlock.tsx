import { twc, TwcComponentProps } from 'react-twc'
import './purpleBlock.css'

interface IPurpleBlockProps extends TwcComponentProps<'div'> {
  isHaveGlitter?: boolean
  isEven?: boolean
}

const PurpleBlock = twc.div<IPurpleBlockProps>((props) => [
  'purple-block flex items-center justify-center',
  props.isHaveGlitter ? 'purple-block-with-glitter' : '',
  props.isEven ? 'purple-block-even' : ''
])

export default PurpleBlock
