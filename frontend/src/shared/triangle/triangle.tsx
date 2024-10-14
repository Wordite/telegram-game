import { HTMLAttributes } from 'react'

interface ITriangleProps extends HTMLAttributes<HTMLDivElement> {
  isBig?: boolean
}

const Triangle = (props: ITriangleProps) => {
  const className = props.className
  const htmlProps = {...props }

  delete htmlProps.isBig
  delete htmlProps.style

  return (
    <div
      {...htmlProps}
      className={`w-0 h-0 ${className}`}
      style={{
        borderLeft: `${props.isBig ? '1.7px' : '1px'} solid transparent`,
        borderRight: `${props.isBig ? '1.7px' : '1px'} solid transparent`,
        borderBottom: `${props.isBig ? '6.5px' : '3px'} solid black`,
        ...props.style
      }}
    />
  )
}

export { Triangle }
