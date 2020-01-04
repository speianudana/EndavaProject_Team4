import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../Layouts/Loading'

const EventInfoStatefull = React.lazy(() => import('./EventInfo.statefull.jsx'))

export default function EventInfoLoadable() {
  return (
    <Suspense fallback={<Load />}>
      <EventInfoStatefull />
    </Suspense>
  )
}
