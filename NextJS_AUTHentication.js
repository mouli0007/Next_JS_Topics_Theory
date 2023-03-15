############################################
		######### Adding Authentication ############
		
		
		#### Adding User Authentication With Next JS
		
		#### How Authentication Work ..? 
		
		1=> We will be entering a data from client side 
		2=> request for user credentials to the server
		3=> and we get a response (yes/no)
		5=> In order to avoid any fake response we ne to use two things ! 
		
	         1=> Server Side Sessions
			 
			     Store the unique indentifer on server , send same identifier to client
			      Client Sends Identifier along with request to protected route
				  
			 2=> Authentication tokens
			 
			      it creates (but not store) permission token on server, send token to client
				  client sends token along with the request to protected routes
				  it cannot be accessble by javascript to prevent cross-site scripting attacks
				  
				  ######################################
				  ######### (JWT) Tokens Logic ##########
				  
				  
			1=> Servers dont save information about clinet authenticated clients
			2=> Instead, clients should get information that allows them to prove their authentication
			
			#### JWT Wotking Example ###
			
			JWT is generated with three main building blocks
			
			1=> Issuer Data
			2=> Custom Data (Example: User Data)
			3=> Secrect Siginig Key (Client dosent get to know about this key )
			
			
			
