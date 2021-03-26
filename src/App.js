import Container from './components/Container'
import CurrencyForm from './components/CurrencyForm'
import Currencies from './components/Currencies'

export default function App() {
  return (
    <Container>
      <h1 style={{
        textAlign: 'center'
      }}>Currency Converter</h1>
      <CurrencyForm />
      <Currencies />
    </Container>
  )
}