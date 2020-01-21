import React, { Suspense } from 'react'
import { FullPageLoading1 as Load } from '../../../Layouts/Loading'

const ContactsStatefull = React.lazy(() => import('./Contacts.statefull.jsx'))

export default function ContactsLoadable () {
    return (
        <Suspense fallback={<Load />}>
            <ContactsStatefull />
        </Suspense>
    )
}
