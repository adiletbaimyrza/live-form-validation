import Title from './Title'
import styled from 'styled-components'

const Example = () => {
  return (
    <div>
      <Title>Example</Title>
      <Form className="">
        <Input type="text" placeholder="First name" />
        <Input type="text" placeholder="Last name" />
        <Input type="email" placeholder="Email" />
        <Input type="tel" placeholder="Mobile number" />
        <Input type="url" placeholder="GitHub Account" />
        <Select>
          <option value="" selected>
            Select...
          </option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </Select>
        <Radio>
          <Label htmlFor="student">
            Student{' '}
            <input
              type="radio"
              name="occupation"
              value="Student"
              id="student"
            />
          </Label>

          <Label htmlFor="developer">
            Developer{' '}
            <input
              type="radio"
              name="occupation"
              value="Developer"
              id="developer"
            />
          </Label>

          <Label htmlFor="other">
            Other{' '}
            <input type="radio" name="occupation" value="Other" id="other" />
          </Label>
        </Radio>
        <Date>
          <label htmlFor="bdate">
            Date of birth <InputDate type="date" id="bdate" />
          </label>
        </Date>
        <Checkbox>
          <label htmlFor="remember-me">
            Remember me <input type="checkbox" id="remember-me" />
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
