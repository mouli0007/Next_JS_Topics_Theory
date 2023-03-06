

Next.js supports lazy loading external libraries with import() and React components with next/dynamic. 
Deferred loading helps improve the initial loading performance by decreasing the amount of JavaScript necessary to render the page. 
Components or libraries are only imported and included in the JavaScript bundle when they're used.

next/dynamic is a composite extension of React.lazy and Suspense, components can delay hydration until the Suspense boundary is resolved.

Example
By using next/dynamic, the header component will not be included in the page's initial JavaScript bundle. 
The page will render the Suspense fallback first, followed by the Header component when the Suspense boundary is resolved.


import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('../components/header'), {
  loading: () => <p>Loading...</p>,
})

export default function Home() {
  return <DynamicHeader />
}
