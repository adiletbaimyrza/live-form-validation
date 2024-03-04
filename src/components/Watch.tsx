import { useWatch, Control } from 'react-hook-form'
import { SubTitle, Title, Pre } from '.'
import { FormValues } from '../App'

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
