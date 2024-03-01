import { ReactNode } from 'react'
import styled from 'styled-components'
import InfoIcon from '@mui/icons-material/InfoOutlined'

type SubTitleProps = {
  children: ReactNode
}

const SubTitle = ({ children }: SubTitleProps) => {
  return (
    <P>
      <InfoIconStyled />
      {children}
    </P>
  )
}

export default SubTitle

const P = styled.p`
  display: flex;
  align-items: center;
`

const InfoIconStyled = styled(InfoIcon)`
  margin-right: 5px;
`
