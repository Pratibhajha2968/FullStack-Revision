/*
        Hooks :- React hooks are special functions that allows you to use state and other react features.
                 Hooks are used to manage state and lifecycle.
                 Hooks are inbuilt in react 
                 hooks were introduced in 16.8 version


         hooks are inbuilt function components in react
   -     can use hooks inside function component on top of other code like conditional
         ,looping and rendering etc.,
         

         Types:
-------
    1.inbuilt hooks- inbuilt /existing hooks
    2.custom hooks - created by developer/user


    React Hooks are special functions introduced in React 16.8 that let you use state and other React features in functional components. Hooks allow functional components to do things that previously only class components could do, like managing state or using lifecycle methods.

        Types of hooks in react are :-
          1. Basic Hooks :-
             This are the most common used hooks in every project.
                => useState =It is used to manage local state inside a functional component.
                  When we update state:
                    1.React stores the new values.
                    2.React re-renders the components. 
                    3.UI updates automatically.
                         State updates are asynchronous.
                         Never mutate state directly.
                         Functional update pattern:
                               Counters
                               Form inputs
                               Toggle buttons
                               UI visibility
                => useEffect =It is used to call or handle side effects    (API calls , timers etc)
                        API calls
                        setTimeout / setInterval
                        Event listeners
                        DOM manipulation
                    Lifecycle of useEffect are :-
                         componentdidMount
                         componentdidUpdate
                         componentwillMount

                    Dependency array controls execution:
                          [] → Run once
                          [value] → Run when value changes
                           No array → Run every render
                    When to use?
                          Fetch data
                          Subscribe/unsubscribe
                          Trigger logic after state change
                => useContext =It is used to handle or access global data from context.
                    All this hooks are very important in day to day project.
                        Access global data without prop drilling.
                          App → Parent → Child → Grandchild
                          Passing props manually at every level,

                               Context allows direct access:
                                   Grandchild → directly get value
                                        Common Use Cases:
                                               Theme (dark/light)
                                               Authentication user
                                               Language settings

                       
                          


*/