				
  ################### OptiMizing the NEXT JS Application #################
  
  
  By using some keywords : 
  
  example : Depend on our use case
  
  ### While Fetching ###
  
  revalidate : 10
  fallback : true || false
  
  
  ### For SEO ####
  
  use Head--> Title and --> META
  
  ### Re-Using the logic in Next JS ###
  
  1=> Head Section
  
  ##### _document.js ######
  
  ===> It Will Acccep the Class Baes Component !
  ==> Provides Extra HTML element outside of component tree
  EX : (it helps for React-Portals)
  
  syntax ###
  
  import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <body>
            <div id="overlays" /> 
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

export default MyDocument;
  
  #### Image OptiMizing in NEXT JS #####
  

  
  import Image from 'next/image'
  
  You always have to add Width and height for the image !
  
  This Makes the image load whenever its needed 
  
    Syntax #### 
  
  <Image src = {image} alt ="title" width={240} height={160px}/>
  
