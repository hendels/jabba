#API
API - Application programming interface, this the way in which programs communicate with each other. 
Web API's has defined methods available at the URI's addresses - which are called endpoints

#REST 
is a standard which defines rules of API designing
in case of Web API it uses HTTP protocol to create, read, update and delete (it uses methods POST, GET, PUT, DELETE)

# Rules of REST
* Uniform interface - it should provide standard communication between client and server, in that way we can communiate from the all types of devices and environments only to one API interface. So one interface responses for all client requests.
* Client server - in this rule we have marked division between CLIENT and SERVER, so client and server can grow independently
* Stateless - each of requests has to have all information required to end each of request. It means that server can't store any information about state of the client. Client provide set of infomation which enable server to recognize from which part of application client can use (for example permissions)
* Cacheable - API should support data caching (on client side) to improve perfomance in case of multiple client request. Server should inform client about which information can be cached and which not -  for example React State
* Layered system - server should be designed in the way that client can make a request without knowing about other layers in which server are connected to
* Code on demand (optional ) - means that server can send code snippet to the client (for example java script), so in response to a request server sends snippet which can be used by client in some cases