import { SubTitle, Title } from '.'
import { Control, useFormState } from 'react-hook-form'
import { FormValues } from '../App'
import styled, { keyframes } from 'styled-components'

const Errors = ({ control }: { control: Control<FormValues> }) => {
  const { errors } = useFormState({ control })

  const simplifiedErrors = Object.keys(errors).reduce(
    (acc, key) => {
      acc[key] = {
        type: errors[key]?.type,
        message: '',
      }
      return acc
    },
    {} as Record<string, { type: string; message: string }>,
  )

  return (
    <div>
      <Title>Errors</Title>
      <SubTitle>Validation errors will appear here</SubTitle>
      {Object.keys(simplifiedErrors).length > 0 && (
        <Pre>{JSON.stringify(simplifiedErrors, null, 2)}</Pre>
      )}
    </div>
  )
}

export default Errors

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
