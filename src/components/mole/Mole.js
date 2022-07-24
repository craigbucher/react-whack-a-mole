

import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {

  const { whack, dens } = props
  // console.log(key)

  if (dens) {
    return (
      <div className="den">
        <img src={MoleIcon} className="Mole" alt="Mole" onClick={whack} />
      </div>
    )
  } else {
    return (
      <div className="den"></div>
    )
  }
}

export default Mole