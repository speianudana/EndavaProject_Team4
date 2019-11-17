import React, { Suspense } from 'react'

const LoginStatefull = React.lazy(() => import('./Login.statefull.jsx'));

const LoadingComponent = () => (<div>Loading...</div>)

export default function AuthLoadable() {

  return <Suspense fallback={<LoadingComponent />}>
    <LoginStatefull />
  </Suspense>
}