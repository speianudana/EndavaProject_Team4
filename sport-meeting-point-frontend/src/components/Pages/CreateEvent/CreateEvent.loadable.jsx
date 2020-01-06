import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../Layouts/Loading'

const CreateEventStatefull = React.lazy(() => import('./CreateEvent.statefull.jsx'))

export default function CreateEventLoadable() {
  return (
    <Suspense fallback={<Load />}>
      <CreateEventStatefull />
    </Suspense>
  )
}
