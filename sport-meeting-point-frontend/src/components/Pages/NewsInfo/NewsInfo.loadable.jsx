import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../Layouts/Loading'

const NewsInfoStatefull = React.lazy(() => import('./NewsInfo.statefull.jsx'))

export default function NewsInfoLoadable () {
  return (
    <Suspense fallback={<Load />}>
      <NewsInfoStatefull />
    </Suspense>
  )
}
