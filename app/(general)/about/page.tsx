import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Mi titulo about ',
	description: 'SEO description about',
	keywords: ['keyword1', 'keyword2']
}

export default function AboutPage () {
    return(
        <>
        <span className="text-7xl">About page</span>
        </>
    )
 
}
