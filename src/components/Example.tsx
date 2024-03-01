import Title from './Title'
import styled from 'styled-components'

const Example = () => {
  return (
    <div>
      <Title>Example</Title>
      <Form className="">
        <Input type="text" placeholder="First name"></Input>
        <Input type="text" placeholder="Last name"></Input>
        <Input type="password" placeholder="Password"></Input>
        <Input type="email" placeholder="Email"></Input>
        <Input type="tel" placeholder="Mobile number"></Input>
        <Input type="url" placeholder="GitHub Account"></Input>
        <Select>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </Select>
        <div>
          <input type="radio" value="Student" id="student"></input>
          <label htmlFor="student">Student</label>
          <input type="radio" value="Developer" id="developer"></input>
          <label htmlFor="developer">Developer</label>
          <input type="radio" value="Other" id="other"></input>
          <label htmlFor="other">Other</label>
        </div>
        <div>
          <label htmlFor="bdate">Date of birth</label>
          <input type="date" id="bdate"></input>
        </div>
        <div>
          <input type="checkbox" id="remember-me"></input>
          <label htmlFor="remember-me"> Remember me</label>
        </div>
        <input type="submit" value="Submit"></input>
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
  padding: 6px 10px;
  margin-bottom: 20px;
  border-radius: 4px;
`

const Select = styled.select`
  padding: 6px 10px;
  margin-bottom: 20px;
  border-radius: 4px;
`
