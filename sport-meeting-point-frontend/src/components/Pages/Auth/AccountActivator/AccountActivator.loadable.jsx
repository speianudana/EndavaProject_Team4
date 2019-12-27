import React, { Suspense } from 'react'
import { FullPageLoading1 as Loading } from '../../../Layouts/Loading'

const AccountActivatorStatefull = React.lazy(() => import('./AccountActivator.statefull.jsx'))

export default function AuthLoadable() {
  return (
    <Suspense fallback={<Loading />}>
      <AccountActivatorStatefull />
    </Suspense>
  )
}
