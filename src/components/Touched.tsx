import { SubTitle, Title } from '.'
import { Control, useFormState } from 'react-hook-form'
import { FormValues } from '../App'
import styled, { keyframes } from 'styled-components'

const Touched = ({ control }: { control: Control<FormValues> }) => {
  const { touchedFields } = useFormState({ control })

  return (
    <div>
      <Title>Touched</Title>
      <SubTitle>Touched fields will display here</SubTitle>
      {Object.keys(touchedFields).length > 0 && (
        <Pre>{JSON.stringify(touchedFields, null, 2)}</Pre>
      )}
    </div>
  )
}

export default Touched

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
  animation: ${fadeIn} 1s ease-in;
`
