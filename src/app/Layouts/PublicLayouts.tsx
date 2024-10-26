import React from 'react'
type proptype={
children: React.ReactNode;
}
const PublicLayouts:React.FC<proptype> = (props) => {
  return (
   <>
   <div>
    <div>
       {/* Header */}
    </div>
    <div>
       {props.children}
    </div>
    <div>
       {/* Footer  */}
    </div>
   </div>
   
   </>
  )
}

export default PublicLayouts