import React from 'react'
import { FelicitacionesH2, FelicitacionesTitle, FelicitacionesWrapper } from './FelicitacionesStyles'
import { BiJoystick } from 'react-icons/bi'
import {MdOutlineVideogameAsset } from 'react-icons/md'
import {TbDiscountCheck} from 'react-icons/tb'

const Felicitaciones = () => {
  return (
    <FelicitacionesWrapper> 
        <FelicitacionesTitle>
        <MdOutlineVideogameAsset size={100} color='var(--cyan)'/>
            <h1>GRACIAS POR TU COMPRA</h1> <BiJoystick size={100} color='var(--magenta)'/>
        </FelicitacionesTitle>
        <FelicitacionesH2>
        <TbDiscountCheck size={80} color='green'/>
        <h2>Tu pedido se realizó con éxito</h2>
        </FelicitacionesH2>
    
    </FelicitacionesWrapper>
  )
}

export default Felicitaciones