import React,{ReactNode} from 'react'
type Props = {
    children: ReactNode | ReactNode[]
  }
const SectionWrapper = ({children}: Props) => {
  return (
    <div className=" h-[70vh] flex flex-col  justify-center items-center">
      {children}
    </div>
  )
}

export default SectionWrapper
