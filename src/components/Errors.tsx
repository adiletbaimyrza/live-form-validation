import { Control, useFormState } from 'react-hook-form'
import { SubTitle, Title, Pre } from '.'
import { FormValues } from '../App'

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
