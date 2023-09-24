import React from 'react'
import { FelicitacionesButton, FelicitacionesH2, FelicitacionesTitle, FelicitacionesWrapper } from './FelicitacionesStyles'
import { BiJoystick } from 'react-icons/bi'
import {MdOutlineVideogameAsset } from 'react-icons/md'
import {TbDiscountCheck} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const Felicitaciones = () => {
    const navigate = useNavigate()
  return (
    <FelicitacionesWrapper> 
        <FelicitacionesTitle>
        <MdOutlineVideogameAsset size={70} color='var(--cyan)'/>
            <h1>GRACIAS POR TU COMPRA</h1>
          <BiJoystick size={70} color='var(--magenta)'/>
        </FelicitacionesTitle>
        <FelicitacionesH2>
        <TbDiscountCheck size={70} color='green'/>
        <h2>Tu pedido se realizó con éxito</h2>
  
        </FelicitacionesH2>
    <FelicitacionesButton onClick={() => navigate('/')}> Volver a Inicio</FelicitacionesButton>
    <FelicitacionesButton onClick={() => navigate('/mis-ordenes')}> Ver mis pedidos</FelicitacionesButton>
    </FelicitacionesWrapper>
  )
}

export default Felicitaciones