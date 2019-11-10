import React, { Suspense } from 'react'

const RegisterStatefull = React.lazy(() => import('./Register.statefull.jsx'));

const LoadingComponent = () => (<div>Loading...</div>)

export default function RegisterLoadable() {

  return <Suspense fallback={<LoadingComponent />}>
    <RegisterStatefull />
  </Suspense>
}