import { PropsWithChildren } from "react"

const blockTypes = {}

interface IShadowBlockProps {
    type: 'LightTwoSided' | 'LightOneSided' | 'OrangeTwoSided' | 'PurpleOneSide' | 'PurpleTwoSided',
    isButton: boolean
}

// const shadows = {
//   LightTwoSided: 'shadow',
//   LightOneSided: 'shadow-[inset_0_-8px_0_0_#BAB7AA]',
//   OrangeTwoSided: 'shadow-[inset_0_-8px_0_0_#BAB7AA]',
//   PurpleOneSide: 'shadow-[inset_0_-8px_0_0_#BAB7AA]',
//   PurpleTwoSided: 'shadow-[inset_0_-8px_0_0_#BAB7AA]',
// }

const ShadowBlock = ({ type, isButton }: IShadowBlockProps) => {
  const Wrapper = isButton ? ({ children }: PropsWithChildren) => (<button>{children}</button>) : ({ children }: PropsWithChildren) => (<div>{children}</div>)

  return (
    <Wrapper>
      {type}
    </Wrapper>
  )
}

export default ShadowBlock