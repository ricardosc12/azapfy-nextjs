import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Framer from '@/layouts/Framer';

const Pesquisa =  dynamic(() => import('@/components/organismos/App/Pesquisa'), {
    suspense: true,
});

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Framer><Pesquisa/></Framer>
        </Suspense>
    )
}

Page.nav = true