import React, { Suspense } from 'react'
import { FullPageLoading1 as Loading } from '../../../../Layouts/Loading'

const EventsStatefull = React.lazy(() => import('./Events.statefull.jsx'))

const LoadingComponent = () => (<Loading />)

export default function EventsLoadable () {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <EventsStatefull />
    </Suspense>
  )
}
