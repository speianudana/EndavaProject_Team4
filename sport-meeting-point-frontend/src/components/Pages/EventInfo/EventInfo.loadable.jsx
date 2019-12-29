import React, { Suspense } from 'react'

const EventInfoStatefull = React.lazy(() => import('./EventInfo.statefull.jsx'))

const LoadingComponent = () => (<div>Loading...</div>)

export default function EventInfoLoadable () {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <EventInfoStatefull />
    </Suspense>
  )
}
