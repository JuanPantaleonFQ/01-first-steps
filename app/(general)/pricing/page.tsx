import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Mi titulo SEO pricing',
	description: 'SEO pricing',
	keywords: ['keyword1', 'keyword2']
}

export default function PricingPage () {
    return(
        <>
        <span className="text-7xl">Princing page</span>
        </>
    ) 
}