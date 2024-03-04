import styled, { keyframes } from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin-top: 30px;
  margin-bottom: 20px;
  overflow: hidden;

  &::before,
  &::after {
    background-color: var(--light-blue);
    content: '';
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  &::before {
    right: 8px;
    margin-left: -50%;
  }

  &::after {
    left: 8px;
    margin-right: -50%;
  }
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
  animation: ${fadeIn} 1s ease-in;
`

export { Title, Pre }
