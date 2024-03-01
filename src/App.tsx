import Title from './components/Title'
import Example from './components/Example'
import styled from 'styled-components'
import './App.css'

function App() {
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
        <Example />
        <Title>Watch</Title>
        <Title>Errors</Title>
        <Title>Touched</Title>
      </Grid>
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
  font-size: 50px;
  padding: 2px 0;
  border-bottom: 2px solid var(--pink);
  margin-bottom: 40px;
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
