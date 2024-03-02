import { UseFormRegister, UseFormHandleSubmit } from 'react-hook-form'
import { Title } from '.'
import styled from 'styled-components'
import { FormValues } from '../App'

type ExampleProps = {
  register: UseFormRegister<FormValues>
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>
  submitHandler: (data: FormValues) => void
}

const Example = ({ register, handleSubmit, submitHandler }: ExampleProps) => {
  return (
    <div>
      <Title>Example</Title>
      <Form onSubmit={handleSubmit(submitHandler)}>
        <Input {...register('fname')} type="text" placeholder="First name" />
        <Input {...register('lname')} type="text" placeholder="Last name" />
        <Input {...register('email')} type="email" placeholder="Email" />
        <Input {...register('tel')} type="tel" placeholder="Mobile number" />
        <Input {...register('url')} type="url" placeholder="GitHub Account" />
        <Select {...register('title')} defaultValue="">
          <option value="">Select...</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </Select>
        <Radio>
          <Label htmlFor="student">
            Student{' '}
            <input
              {...register('occupation')}
              type="radio"
              name="occupation"
              value="Student"
              id="student"
            />
          </Label>

          <Label htmlFor="developer">
            Developer{' '}
            <input
              {...register('occupation')}
              type="radio"
              name="occupation"
              value="Developer"
              id="developer"
            />
          </Label>

          <Label htmlFor="other">
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
            <InputDate {...register('bdate')} type="date" id="bdate" />
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

const Input = styled.input`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding: 10px 6px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid var(--dark-blue);

  transition: border 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    border: 1px solid var(--pink);
  }
`

const Select = styled.select`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding: 10px 6px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid var(--dark-blue);

  transition: border 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    border: 1px solid var(--pink);
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

const InputDate = styled.input`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  padding: 10px 6px;
  border-radius: 4px;
  border: 1px solid var(--dark-blue);

  transition: border 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    border: 1px solid var(--pink);
  }
`

const Checkbox = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  margin-right: 20px;
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
