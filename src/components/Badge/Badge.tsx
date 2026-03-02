import './Badge.css'

interface BageStatus {
        productName: string
        cantidad: number
    }

const Badge = (props: BageStatus) => {

    let classBage = 'normal'
    let text = props.productName

    if (props.cantidad === 0) {
        classBage = 'agotado'
    } else if (props.cantidad <= 10) {
        classBage = 'critico'
    }

  return (
    <div className={classBage}>
        {text} ({props.cantidad})
    </div>
  )
}

export default Badge