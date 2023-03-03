##################################################

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
