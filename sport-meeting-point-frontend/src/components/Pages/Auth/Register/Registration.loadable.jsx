import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../../Layouts/Loading'

const RegistrationStatefull = React.lazy(() => import('./Registration.statefull.jsx'))

export default function RegistrationLoadable () {
  return (
    <Suspense fallback={<Load />}>
      <RegistrationStatefull />
    </Suspense>
  )
}
