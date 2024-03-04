import { Control, useFormState } from 'react-hook-form'
import { SubTitle, Title, Pre } from '.'
import { FormValues } from '../App'

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
