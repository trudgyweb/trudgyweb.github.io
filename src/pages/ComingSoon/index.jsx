import React from 'react'
import { Helmet } from 'react-helmet';
function ComingSoon() {
  return (
    <div className="container-fluid">
      <Helmet>
        <title>Home | Trudgy Web Solutions - Web Development Company</title>
      </Helmet>
      <div className="row justify-content-center pt-5 align-items-center" style={{height:" 80vh"}}>
        <div className="col-md-6">
        <h1 className="text-white text-center ft-poppins">
          Coming Soon
        </h1>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon;