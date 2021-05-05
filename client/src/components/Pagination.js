import React from 'react'
import { Label } from 'semantic-ui-react'



const CircularNumber = (props) => (
  <div style={{position: 'relative'}}>
      <Label circular color={'yellow'} >
        {props.pagenum}
      </Label>

  </div>
)

export default CircularNumber
