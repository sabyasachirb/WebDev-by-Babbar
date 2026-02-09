import React from 'react'
import { useParams } from 'react-router'

const ParamCom = () => {
    const {id} = useParams();
  return (
    <div>
      Params: {id};
    </div>
  )
}

export default ParamCom
