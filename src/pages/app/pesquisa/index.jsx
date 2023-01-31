import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Pesquisa =  dynamic(() => import('@/components/organismos/App/Pesquisa'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Pesquisa />
        </Suspense>
    )
}

Page.nav = true