import React, { Suspense } from 'react'

const NewsStatefull = React.lazy(() => import('./News.statefull.jsx'))

const LoadingComponent = () => (<div>Loading...</div>)

const NewsLoadable = () => (
  <Suspense fallback={<LoadingComponent />}>
    <NewsStatefull />
  </Suspense>
)

export default NewsLoadable
