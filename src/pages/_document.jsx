import { Html, Head, Main, NextScript } from 'next/document'
import CssBaseline from '@mui/material/CssBaseline';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script src="https://cdn.babylonjs.com/babylon.js"></script>
    <script src="https://cdn.babylonjs.com/inspector/babylon.inspector.bundle.js"></script>

        </Head>
      <body>
      <CssBaseline />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}