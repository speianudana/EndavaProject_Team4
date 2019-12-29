import React, { Suspense } from 'react'

const CreateNewsStatefull = React.lazy(() => import('./CreateNews.statefull.jsx'))

const LoadingComponent = () => (<div>Loading...</div>)

export default function CreateNewsLoadable () {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <CreateNewsStatefull />
    </Suspense>
  )
}
