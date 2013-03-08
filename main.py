import socket

#create an INET, STREAMing socket
serversocket = socket.socket( socket.AF_INET, socket.SOCK_STREAM )
#bind the socket to a public host,
# and a well-known port
serversocket.bind( ( "127.0.0.1" , 3333 ) )
#become a server socket
serversocket.listen( 5 )

i = 0

while True:
	c, addr = serversocket.accept()
	print("got a connection from" )
	c.send( str(i) + "lolz" )
	i += 1
	
