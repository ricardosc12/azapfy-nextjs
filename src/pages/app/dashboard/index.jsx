import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Dashboard =  dynamic(() => import('@/components/organismos/App/Dashboard'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
        </Suspense>
    )
}

Page.nav = true