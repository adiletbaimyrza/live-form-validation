import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin-top: 60px;
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

export default Title
