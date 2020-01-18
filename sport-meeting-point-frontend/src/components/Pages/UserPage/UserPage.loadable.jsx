import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../Layouts/Loading'

const UserPageStatefull = React.lazy(() => import('./UserPage.statefull.jsx'))

export default function AuthLoadable () {
  return (
    <Suspense fallback={<Load />}>
      <UserPageStatefull />
    </Suspense>
  )
}
