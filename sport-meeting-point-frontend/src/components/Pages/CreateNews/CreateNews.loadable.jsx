import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../Layouts/Loading'

const CreateNewsStatefull = React.lazy(() => import('./CreateNews.statefull.jsx'))

export default function CreateNewsLoadable() {
  return (
    <Suspense fallback={<Load />}>
      <CreateNewsStatefull />
    </Suspense>
  )
}
