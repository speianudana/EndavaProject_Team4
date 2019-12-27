import React, { Suspense } from 'react'

const LoginStatefull = React.lazy(() => import('./Login.statefull.jsx'))

const LoadingComponent = () => (<div>Loading...</div>)

const AuthLoadable = () => (
  <Suspense fallback={<LoadingComponent />}>
    <LoginStatefull />
  </Suspense>
)

export default AuthLoadable
