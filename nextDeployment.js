
###############################################################3
############### Deploying NExt JS App #######################


### From Development to Prodution ####


### Deployment Options ########

## 1=> Standard Build !

    command : next build
    with (Next Build) Produces an optimized prodution bundle and gives u an server side application(requires a noddejs server)
	Pages are pre rendered but node js server is required for API Routes, server side pages and revalidations
	re-deployment needed if any code was changed and not if any content changes (revalidation will handle the content )


## 2=> Full Static Build
     
	 command : next export 
	 we need to add export script 
	 "export" : "next export"
	 
	 it also produces the static application but it provides 100% static application (HTML, CSS , JS)
	 no NodeJS Server Required
	 
	 it dosent work if your app uses API Routes, server side pages or wants to use page validations
	 we cant use page revalidation and fallback 
	 
	 so we need to redeploy whenever oru code and content changes
	 
	 Example => its totally okay if we are building a simple application(BLOG)
   
   
   
   ### Deployment Steps and considerations ########
   
   1=> Add page metaData, optimize code, remove unnecessary dependencies
   2=> Using environment variables for variable data(eg : database credentials)
   3=> Do a test build and test the production ready app locally (and we can check if we need something)
   4=> Deploy Finally !
   
   
   
   #### Steps to Follow on a application #####
   
   By Default Next JS have a built iin lazy loading...
   
   1=> Optimizing our code (Ex : Images )
    
	2=>  next-congig.js file
	
        For some advanced configurations
		it will allow us to define a different environment variables for development phase and 
		production phase 
		
		###Syntax###
		
		const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "moulivj",
        mongodb_password: "password",
        mongodb_clustername: "clustername",
        mongodb_database: "my-site-database-key",
      },
    };
  }

  return {
    env: {
      mongodb_username: "moulivj",
      mongodb_password: "password",
      mongodb_clustername: "clustername",
      mongodb_database: "my-site-database-key-production",
    },
  };
};


3=> ######### Doing a test Build ###########


1=> it gives you the status which pagesare pre-generated 
 which file has big memmory or size and which is not optimal

2=> we can make some code optimizing changes to make the bundle size small (Ex : React Third party package)
