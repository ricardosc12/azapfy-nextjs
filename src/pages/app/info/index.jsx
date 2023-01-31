import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Info =  dynamic(() => import('@/components/organismos/App/Info'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Info />
        </Suspense>
    )
}

Page.nav = true