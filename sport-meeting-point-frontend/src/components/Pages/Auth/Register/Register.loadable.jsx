import React, { Suspense } from 'react'

const RegisterStateless = React.lazy(() => import('./Register.stateless.jsx'));

const LoadingComponent = () => (<div>Loading...</div>)

export default function RegisterLoadable() {

  return <Suspense fallback={<LoadingComponent />}>
    <RegisterStateless />
  </Suspense>
}