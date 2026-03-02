import './App.css'
import Server from './components/Server/Server'
import Badge from './components/Badge/Badge'
import PlanCard from './components/PlanCard/PlanCard'

const App = () => {

  return (
    // <>
    // <Server serverName='Web principal' status='online'></Server>
    // <Server serverName='Base de Datos' status='online'></Server>
    // <Server serverName='Api de Pagos' status='offline'></Server>
    // </>
    // <div>
    //   <h1>Panel de Inventario</h1>
    //   <Badge productName="Teclado Mecánico RGB" cantidad={0} />
    //   <Badge productName="Mouse Gamer Inalámbrico" cantidad={5} />
    //   <Badge productName="Monitor 27' 144Hz" cantidad={25} />
    // </div>
    <>
    <PlanCard nombre="Básico" precio={10} popular={false} />
    <PlanCard nombre="Premium" precio={50} popular={true} />
    </>
  )
}

export default App
