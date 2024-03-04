import { Control, useFormState } from 'react-hook-form'
import { SubTitle, Title, Pre } from '.'
import { FormValues } from '../App'

type TransformedErrorsType = {
  [key: string]: {
    type: string | number
    message: string
  }
}

const Errors = ({ control }: { control: Control<FormValues> }) => {
  const { errors } = useFormState({ control })

  const transformedErrors: TransformedErrorsType = {}
  Object.entries(errors).forEach(([key, value]) => {
    transformedErrors[key] = {
      type: value?.type || '',
      message: '',
    }
  })

  return (
    <div>
      <Title>Errors</Title>
      <SubTitle>Validation errors will appear here</SubTitle>
      {Object.keys(transformedErrors).length > 0 && (
        <Pre>{JSON.stringify(transformedErrors, null, 2)}</Pre>
      )}
    </div>
  )
}

export default Errors
