import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'
import { Example, Watch, Errors, Touched } from './components'
import styled, { keyframes } from 'styled-components'
import './App.css'
import { Modal } from '@mui/material'
import { useState } from 'react'
import { Title } from './components'

export type FormValues = {
  fname: string
  lname: string
  email: string
  tel: number
  url: string
  title: 'Mrs' | 'Mr' | 'Miss' | 'Dr'
  occupation: 'Student' | 'Developer' | 'Other'
  bdate: Date
  remember: boolean
}

function App() {
  const [openSubmit, setOpenSubmit] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormValues | null>(null)
  const { register, handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const submitHandler = (data: FormValues) => {
    setFormData(data)
    setOpenSubmit(true)
  }

  return (
    <>
      <Header>
        <Heading>Live Form Validation</Heading>
        <Subheading>
          The following form demonstrates form validation in action. <br />
          Each column represents what has been captured in the custom hook.
        </Subheading>
      </Header>
      <Grid>
        <Example
          register={register}
          handleSubmit={handleSubmit}
          submitHandler={submitHandler}
          control={control}
        />
        <Watch control={control} />
        <Errors control={control} />
        <Touched control={control} />
      </Grid>
      <Modal open={openSubmit} onClose={() => setOpenSubmit(false)}>
        <ModalCard>
          <Title>Submit</Title>
          <Pre>{formData && JSON.stringify(formData, null, 2)}</Pre>
          <Close onClick={() => setOpenSubmit(false)}>Close</Close>
        </ModalCard>
      </Modal>
    </>
  )
}

export default App

const Header = styled.div`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  margin: 0 auto;
  font-size: 40px;
  padding: 2px 0;
  border-bottom: 2px solid var(--pink);
  margin-bottom: 20px;
`

const Subheading = styled.p`
  font-size: 20px;
  margin: 0 auto;
  text-align: center;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  margin: 0 50px;
`

const ModalCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--dark-blue);
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
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
  animation: ${fadeIn} 0.8s linear;
`

const Close = styled.button`
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
  margin-top: 20px;

  transition: background-color 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    background-color: var(--light-pink);
  }
`
