export default function ConversionLabel(props) {
  const { id, currency } = props 
  return (
    <label 
      style={{ 
        display: 'flex',
        marginBottom: '1rem',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
      }} 
      htmlFor={id}
    >
      <div>
        {currency.code}<br /> 
        {currency.name}
      </div>
      <div>
        <img src={`https://www.ecb.europa.eu/shared/img/flags/${currency.code}.gif`} alt="" />
      </div>
    </label>
  )
}