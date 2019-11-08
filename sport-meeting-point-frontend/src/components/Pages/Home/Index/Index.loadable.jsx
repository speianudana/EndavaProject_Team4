import React, { Suspense } from 'react'

const IndexStatefull = React.lazy(() => import('./Index.statefull.jsx'));

const LoadingComponent = () => (<div>Loading...</div>)

export default function IndexLoadable() {

    return <Suspense fallback={<LoadingComponent />}>
        <IndexStatefull />
    </Suspense>
}