import { SubTitle, Title } from '.'
import { useWatch, Control } from 'react-hook-form'
import { FormValues } from '../App'
import styled, { keyframes } from 'styled-components'

const Watch = ({ control }: { control: Control<FormValues> }) => {
  const formData = useWatch({ control })

  return (
    <div>
      <Title>Watch</Title>
      <SubTitle>Change inputs value to update watched values</SubTitle>
      {Object.keys(formData).length > 0 && (
        <Pre>{JSON.stringify(formData, null, 2)}</Pre>
      )}
    </div>
  )
}

export default Watch

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Pre = styled.pre`
  margin-top: 12px;
  margin-bottom: 12px;
  padding-left: 30px;
  padding-right: 30px;
  line-height: 1.5;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 355px;
  animation: ${fadeIn} 0.8s linear;
`
