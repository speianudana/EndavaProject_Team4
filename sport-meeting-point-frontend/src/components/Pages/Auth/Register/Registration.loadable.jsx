import React, { Suspense } from 'react'

const RegistrationStatefull = React.lazy(() => import('./Registration.statefull.jsx'))

const LoadingComponent = () => (<div>Loading...</div>)

export default function RegistrationLoadable() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <RegistrationStatefull />
    </Suspense>
  )
}
