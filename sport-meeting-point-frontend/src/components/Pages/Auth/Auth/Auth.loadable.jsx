import React, { Suspense } from 'react'

const AuthStatefull = React.lazy(() => import('./Auth.statefull.jsx'));

const LoadingComponent = () => (<div>Loading...</div>)

export default function AuthLoadable() {

  return <Suspense fallback={<LoadingComponent />}>
    <AuthStatefull />
  </Suspense>
}