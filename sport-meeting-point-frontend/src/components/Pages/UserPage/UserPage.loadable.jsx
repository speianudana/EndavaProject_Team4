import React, { Suspense } from 'react'

const UserPageStatefull = React.lazy(() => import('./UserPage.statefull.jsx'));

const LoadingComponent = () => (<div>Loading...</div>);

export default function AuthLoadable() {

  return <Suspense fallback={<LoadingComponent />}>
    <UserPageStatefull />
  </Suspense>
}