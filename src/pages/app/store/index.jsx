import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Store =  dynamic(() => import('@/components/organismos/App/Store'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Store />
        </Suspense>
    )
}

Page.nav = true