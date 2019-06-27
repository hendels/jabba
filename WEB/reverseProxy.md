

# proxy 
server that hides identity of the client

Client connects to proxy to hide his identity f.e. me to Google, I don't want Google to know who I am
Proxy makes request to the server. Server knows only the proxy.

benefits:
- anonymity
- caching
- blocking unwanted sites
- geofencing

# reverse proxy


client has no idea to which server is connecting to

benefits:
* load balancing
* caching
- isolating internal traffic
- logging
- canary deployment (testing on one of instances)


https://www.youtube.com/watch?v=ozhe__GdWC8