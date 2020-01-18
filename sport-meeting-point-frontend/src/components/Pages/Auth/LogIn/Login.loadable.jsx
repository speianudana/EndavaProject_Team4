import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../../Layouts/Loading'

const LoginStatefull = React.lazy(() => import('./Login.statefull.jsx'))

const AuthLoadable = () => (
  <Suspense fallback={<Load />}>
    <LoginStatefull />
  </Suspense>
)

export default AuthLoadable
