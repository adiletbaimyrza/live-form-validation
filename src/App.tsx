import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './schema'
import { Example, Watch, Errors, Touched, SubmitModal } from './components'

import styled from 'styled-components'
import './App.css'

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
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormValues | null>(null)
  const { register, handleSubmit, control } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const submitHandler = (data: FormValues) => {
    setFormData(data)
    setOpenModal(true)
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
      <SubmitModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        formData={formData}
      />
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
