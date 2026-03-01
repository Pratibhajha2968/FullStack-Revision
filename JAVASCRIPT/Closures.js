/*   
     What is closures ?
      => A closure is created when:
           A function remembers variables from its outer scope even after the outer function has finished execution.

        Why Important?
             Used in data privacy
             Used in React (state logic understanding)
             Used in callbacks

    Why closures are useful in javascript ?
    ==> Closures are useful in javascript for data encapsulation or data hiding , where we can create private variables . They are also used to maintain state across function calls . And they are commonly used in asynchronus operations like setTimeOut , event handlers and callback . 

=====================================================================================

     What are promises ? 
      ==> A promise represents a value that may be available now , later or never .

       States of promises are :-
          Pending 
          Fullfilled
          Rejected 

=====================================================================================
     
     Javascript event loop :- 
        javascript has :
         1. call stack 
         2. Web APIs
         3. Task queues
            a. Microtask (executes fast)
            b. Macrotask (also known as callback queue)
     
     
    What are microtask and macrotasks ?
    ==> A microtask is a high priority async task that run immediately after the current asynchronus code finishes before any macrotask . Microtasks runs before macrotask . 
        COMMON MICROTASKS are :-
          1.promise.then()
          2.promise.catch()
          3.promise.finally()
          4.queue Microtask()
          5.MutationObserver

        When JavaScript runs:
            Run all synchronous code
            Run ALL microtasks
            Run ONE macrotask
            Repeat process
    Microtasks always run before macrotasks.


    ==>A macrotask is a normal asynchronous task that waits in the task (callback) queue and runs when the event loop picks it.
       
          Common Macrotasks:
                setTimeout
                setInterval
                DOM events (click, scroll)
                setImmediate (Node.js)

                EXAMPLE:-
                setTimeout(() => {
                console.log("Macrotask");
                }, 0);

                Even with 0ms, it waits for:
                    All synchronous code to finish
                    All microtasks to finish
                    Then it runs.

*/