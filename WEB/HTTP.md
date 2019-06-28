WEB usues specific protocol to communicate in most cases it's HTTP protocol

# HTTP
is an application layer protocol that allows web-based applications to communicate and exchange data
its the messenger of the WEB, 
its TCP/IP based protocol
it is used to deliver contents,  for example images videos audios documents

* HTTP is stateless: client makes the request, then when response is ready server deliver the response and the client disconnect from the server
* http can deliver any sort of data, as long  as computers can read it
* HTTP is stateless component, it means that server and client know about each other just during the current request, if connection closes new connection is handled as the very first one
* it offers actions (what server should do) : POST, GET, PUT, DELETE - (CRUD)

# HTTP build:
* Start line
* Headers
* Body

## request
* Start line - METHOD / URI / HTTP VERSION
* Headers - connection type, where (URI), which data type
* Body

## response
* Start line
* Headers
* Body

# status codes:
200 ok
404 file not found // 400 for client
400 bad request
401 no authorization
404 page not found
500 server error
503 service unavailable// 500 for server
504 request timeout

# SO:::
we have the Request Response Cycle, when internet connection establishes, 
Client sends a request > Server proceses request and made response > after that, connection closes