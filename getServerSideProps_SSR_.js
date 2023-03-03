#################################################

######################### SERVER SIDE Rendering (SSR)###############################

###################################################

Server-side rendering (SSR) means that the content of your site is generated on the server, 
then sent to the browser. This is useful for SEO purposes, 
because search engines can "see" the content of your site before they send it to users


Used For 

 1=> Sometimes You need to Pre render for every request 
 or you need to access the request object (eg : cookies)
 
 2=> in built function for SSR is [...getServerSideProps...] which is executes on run time 
    
	this function will be executed whenever the request is made for the component page
	
 3=> we should not use getStaticProps() and getServerSideProps() at the same time	
 
 Syntaxx
 

4=> No Pre-generation will happen in getServerSideProps() coz it runs on every server request time

############ Syntax ##############

export const getServerSideProps = async (context) => {

  // Unlike params we also get access to request and response object 
  
  const { params,req,res } = context;

  // We can get access to the full request object

  return {
    props: {
      userName: "Max",
    },
  };
};

###### Behind the Scenes working with getServerSideProps() ########### 


Main use Case => We prepare the data to the componenet a ahead of time on the server for the component
                and serve a finished page to the client which offers a better USER EXPERIENCE
				it alo helps in SEO
