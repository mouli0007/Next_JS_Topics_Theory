 ########## SYNTAX ###############
		  
		 export const getStaticPaths = async (context) => {
		 
  // We have to specify which instance of dynamic page should be generated
  // those below id with page data will be pre generated
           
		    export const getStaticPaths = async (context) => {
  // We have to specify which instance of dynamic page should be generated
  // those below id with page data will be pre generated

           return {
                paths: [
                          { params: { pid: "p1" } },
                          { params: { pid: "p2" } },
                          { params: { pid: "p3" } },
                       ],
                           fallback: false,
                         };
                        };
						
	// Fallback: false
               
			   This keyword is used when you want to dynamically 
			   pre render a lots of pages with different id
			   it will directly re-direct to page not found if there is no data
			   
			   

     	// Fallback: true 
		              
			   To return a pre-generated page with high priority
			   and to pre render only some pages instaead of pre rendering N[number] of pages
			   it will throw an error if there is no data, but we can configure with below syntax
			   
			    if (!product) {
                      return { notFound: true };
                             }
         
		 // Fallback : 'blocking'
		          
				  it will wait to the non pre rendered page to be generated 
				  so we dont need to add any kind of if checking
				  
				  export const getStaticPaths = async (context) => {
                        // We have to specify which instance of dynamic page should be generated
                         // those below id with page data will be pre generated

                const data = get_data();
                 const ids = data.map((product) => product.id);

                const params = ids.map((id) => ({ params: { pid: id } }));

                 return {
                    paths: params,
 
                   fallback: false,
                      };
                     };
