import React, { Suspense } from 'react'

const CreateEventStatefull = React.lazy(() => import('./CreateEvent.statefull.jsx'))

const LoadingComponent = () => (<div>Loading...</div>)

export default function CreateEventLoadable() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <CreateEventStatefull />
    </Suspense>
  )
}
