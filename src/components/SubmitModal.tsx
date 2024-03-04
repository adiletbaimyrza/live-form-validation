import { Modal } from '@mui/material'
import { Title } from '.'
import { FormValues } from '../App'

import styled, { keyframes } from 'styled-components'

type SubmitModalProps = {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  formData: FormValues | null
}

const SubmitModal = ({
  openModal,
  setOpenModal,
  formData,
}: SubmitModalProps) => {
  const reversedFormData =
    formData && Object.fromEntries(Object.entries(formData).reverse())
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <ModalCard>
        <Title>Submit</Title>
        <Pre>
          {reversedFormData && JSON.stringify(reversedFormData, null, 2)}
        </Pre>
        <Close onClick={() => setOpenModal(false)}>Close</Close>
      </ModalCard>
    </Modal>
  )
}

export default SubmitModal

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
