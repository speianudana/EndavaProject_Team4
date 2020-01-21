import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../../Layouts/Loading'

const AboutStatefull = React.lazy(() => import('./About.statefull.jsx'))

export default function AboutLoadable () {
  return (
    <Suspense fallback={<Load />}>
      <AboutStatefull />
    </Suspense>
  )
}
