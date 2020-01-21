import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../Layouts/Loading'

const CreateEventContainer = React.lazy(() => import('./CreateEvent.container.jsx'))

export default function CreateEventLoadable () {
  return (
    <Suspense fallback={<Load />}>
      <CreateEventContainer />
    </Suspense>
  )
}
