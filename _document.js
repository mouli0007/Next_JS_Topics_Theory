  
  
  ######### _document ###########
  
  import Document, { Html, Head, Main, NextScript } from "next/document";

//  To make Our Next Js application structured and adding some attributes

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
