import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Mi titulo SEO',
	description: 'SEO description',
	keywords: ['i', 'keyword2']
}

export default function ContactPage () {
    return(
        <>
        <span className="text-7xl">Contact page</span>
        </>
    )
 
}