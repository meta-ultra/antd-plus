import { type FC, type PropsWithChildren, type CSSProperties } from 'react'
import { styled } from "@linaria/react"

const SampleWrapper = styled.div/*css*/ `
  height: 100px;
  width: 100px;
  border-radius: 10px;
  box-shadow: 0 1px 5px #333;
`

type LayoutSampleProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
}>

const LayoutSample: FC<LayoutSampleProps> = ({children, className, style}) => {
  return (
    <SampleWrapper>
      {children}
    </SampleWrapper>
  )
}

export default LayoutSample
