methodology of best practises

# CODEBASE
* use version control, you should deploy one version of application (version of code) to multiple environments
# DEPENDENCIES
* you should declare and isolate dependencies

# CONFIGURATION
* should be stricly separated from code, dont send passwords to git
can you make your app open source at any moment without compromising credentials?
# BACKING SERVICES
databases / mailservices these services should be treated as a attachable services, services attached to url stored as environment variables
# BUILD, RELEASE, RUN

# PROCESSES
processes should be stateless , don't use sticky sessions
# PORT BINGING
twelve factor app is completely self-contained, web app exports http as a service by binding to a port
# CONCURRENCY
application should scale up for number of processes and out for workload diversity
# DISPOSABILITY
Quick startup / Resilience to failure (odporność na awarie)/ graceful shutdown
# DEV/PROD PARITY
dev prod environment should be as identical as possible 
# LOGS
you should store logs and treat them as events, you should collect them in some kind of funnel
# ADMIN PROCESSES
admin tasks should be run as isolated processes