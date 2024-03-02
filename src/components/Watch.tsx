import { SubTitle, Title } from '.'
import { FormValues } from '../App'

type WatchProps = {
  formData: FormValues | undefined
}

const Watch = ({ formData }: WatchProps) => {
  return (
    <div>
      <Title>Watch</Title>
      <SubTitle>Change inputs value to update watched values</SubTitle>
      {formData &&
        Object.entries(formData as FormValues).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value as React.ReactNode}
          </div>
        ))}
    </div>
  )
}

export default Watch
