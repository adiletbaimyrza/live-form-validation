import {
  UseFormRegister,
  UseFormHandleSubmit,
  Control,
  useFormState,
} from 'react-hook-form'
import { Title } from '.'
import { FormValues } from '../App'

import styled from 'styled-components'

type ExampleProps = {
  register: UseFormRegister<FormValues>
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>
  submitHandler: (data: FormValues) => void
  control: Control<FormValues>
}

const Example = ({
  register,
  handleSubmit,
  submitHandler,
  control,
}: ExampleProps) => {
  const { errors } = useFormState({ control })

  return (
    <div>
      <Title>Example</Title>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Input
          {...register('fname')}
          type="text"
          placeholder="First name"
          $error={!!errors.fname}
        />
        <Input
          {...register('lname')}
          type="text"
          placeholder="Last name"
          $error={!!errors.lname}
        />
        <Input
          {...register('email')}
          type="email"
          placeholder="Email"
          $error={!!errors.email}
        />
        <Input
          {...register('tel')}
          type="tel"
          placeholder="Mobile number"
          $error={!!errors.tel}
        />
        <Input
          {...register('url')}
          type="url"
          placeholder="GitHub Account"
          $error={!!errors.url}
        />
        <Select {...register('title')} defaultValue="" $error={!!errors.title}>
          <option value="">Select...</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </Select>
        <Radio>
          <Label htmlFor="student" $error={!!errors.occupation}>
            Student{' '}
            <input
              {...register('occupation')}
              type="radio"
              name="occupation"
              value="Student"
              id="student"
            />
          </Label>

          <Label htmlFor="developer" $error={!!errors.occupation}>
            Developer{' '}
            <input
              {...register('occupation')}
              type="radio"
              name="occupation"
              value="Developer"
              id="developer"
            />
          </Label>

          <Label htmlFor="other" $error={!!errors.occupation}>
            Other{' '}
            <input
              {...register('occupation')}
              type="radio"
              name="occupation"
              value="Other"
              id="other"
            />
          </Label>
        </Radio>
        <Date>
          <label htmlFor="bdate">
            Date of birth{' '}
            <DateInput
              {...register('bdate')}
              type="date"
              id="bdate"
              $error={!!errors.bdate}
            />
          </label>
        </Date>
        <Checkbox>
          <label htmlFor="remember">
            Remember me{' '}
            <input {...register('remember')} type="checkbox" id="remember" />
          </label>
        </Checkbox>
        <Submit type="submit" value="Submit" />
      </Form>
    </div>
  )
}

export default Example

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input<{ $error: boolean }>`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding: 10px 6px;
  margin-bottom: 20px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${(props) =>
    props.$error ? 'var(--light-pink)' : 'var(--dark-blue)'};
  border-width: 1px 1px 1px ${(props) => (props.$error ? 10 : 1)}px;

  transition: border 0.2s linear;

  &:hover {
    border-color: var(--light-pink);
  }
`

const Select = styled.select<{ $error: boolean }>`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding: 10px 6px;
  margin-bottom: 20px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${(props) =>
    props.$error ? 'var(--light-pink)' : 'var(--dark-blue)'};
  border-width: 1px 1px 1px ${(props) => (props.$error ? 10 : 1)}px;

  transition: border 0.2s linear;

  &:hover {
    border-color: var(--light-pink);
  }
`
const Radio = styled.div`
  margin-bottom: 20px;
`

const Date = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  margin-bottom: 40px;
`

const DateInput = styled.input<{ $error: boolean }>`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding: 10px 6px;
  border-radius: 4px;
  border-style: solid;
  border-color: ${(props) =>
    props.$error ? 'var(--light-pink)' : 'var(--dark-blue)'};
  border-width: 1px 1px 1px ${(props) => (props.$error ? 10 : 1)}px;

  transition: border 0.2s linear;

  &:hover {
    border-color: var(--light-pink);
  }
`

const Checkbox = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label<{ $error: boolean }>`
  margin-right: 20px;
  color: ${(props) => (props.$error ? 'var(--light-pink)' : 'var(--white)')};
`

const Submit = styled.input`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  color: var(--white);
  background: var(--light-pink);
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  border: 1px solid var(--light-pink);
  border-radius: 4px;
  padding: 16px 10px;
  cursor: pointer;

  transition: background-color 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: var(--pink);
  }
`
