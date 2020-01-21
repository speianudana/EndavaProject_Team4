import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../Layouts/Loading'

const CreateNewsContainer = React.lazy(() => import('./CreateNews.container.jsx'))

export default function CreateNewsLoadable () {
  return (
    <Suspense fallback={<Load />}>
      <CreateNewsContainer />
    </Suspense>
  )
}
