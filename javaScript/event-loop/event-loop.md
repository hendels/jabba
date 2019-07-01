#JavaScript

-   this shit is synchronous, but the Browser put things asynchronously like HTTP Requests
-   Browsers are runtime for JavaScript and much more (like rendering DOM, making ajax [XMLHTTPRequest])

# JavaScript Engine Run Order

-   Execution Stack [Call Stack](global, functions) - when this sections runs - it's called `blocking`, the more things you have to run, more time you have to wait. While you waiting, you cannot use browsers, that's the problem.
-   WebAPIs:

-   Task Queue [Callback Queue](Callbacks, Events):
    -   OnClick, onLoad, onDone, onChange
    -   Callbacks (1. any function that another function calls)

*   Event loop - it's very simple mechanism on whole process, it has one very simple job:
    `look at the stack and look at the Task Queue - it takes first thing on the task queue and push it on the Execution Stack`

-   Event loop has to wait until Execution Stack is clear

*   Render Queue:
    -   when you calling Execution Stack - browser don't render content
    -   when tasks are called from Task Queue - between each next call rerender happens `if people talk about don't block the event loop - they means that`
