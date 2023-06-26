import { Html, Head, Main, NextScript } from 'next/document'

import Navigation from '@/components/Navigation'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>My first app in Next</title>
        <link rel="stylesheet" href="https://bootswatch.com/5/flatly/bootstrap.min.css" />
      </Head>
      <body>
        <Navigation />
        <div className="container p-4">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
