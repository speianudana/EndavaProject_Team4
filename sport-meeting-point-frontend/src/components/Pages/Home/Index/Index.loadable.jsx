import React, { Suspense } from 'react'
import { FullPageLoading1 as Loading } from '../../../Layouts/Loading'

const IndexStatefull = React.lazy(() => import('./Index.statefull.jsx'))

const LoadingComponent = () => (<Loading />)

export default function IndexLoadable () {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <IndexStatefull />
    </Suspense>
  )
}
