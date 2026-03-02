import './PlanCard.css'

interface PlanProps {
  nombre: string;
  precio: number;
  popular: boolean;
}

const PlanCard = (props: PlanProps) => {

    let claseTarjeta = 'norrmal'

    if (props.popular) {
        claseTarjeta = 'destacado';
    }

  return (
    <div className={`tarjeta ${claseTarjeta}`}>
      {props.popular ? <div className="recomendado">Recomendado!!!!!!!</div> : null}
      
      <h2>{props.nombre}</h2>
      <p className="precio">${props.precio} / mes</p>
      
      <button>Elegir Plan</button>
    </div>
  );
};

export default PlanCard;