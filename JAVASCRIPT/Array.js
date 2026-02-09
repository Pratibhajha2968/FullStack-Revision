// Arrays in javascript : - An array is a special object used to store different values in a single variable. It is index based and index starts from 0.it is alays ordered and store different datatypes and they are dynamic in size.

// ex :- let numbers = [10,20,30,40,50];

// Array index 0 based :-
let arr = ["HTML", "CSS", "JAVASCRIPT"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

/* Types of Array in js :-
         1. one-dimensional array =
                  =>Stores values in a single line
                       let marks = [10,20,30];
         2. two-dimensional array  =
                 => used to store arrays inside array in row and columns like matrix.
                        let matrix = [
                                  [10 , 20]
                                  [30 , 40]
                                        ];    
                      
         3.  jagged array or irregular array or multidimensional array =           
                   => it is also same as 2d array but the length of inner arrays that is row and coloumn have different lengths. 
                          let matrix =[
                                 [10,20,30]
                                 [40,50]
                                 [60];
                          ];
          4. hetrogeneous data type =
                    => it stores different data types
                           let data = [1,"pratibha",null,true];
                              javascript allow this but java does not allow

          5. Arrays of objects =
                     => it is the most used array in react and mern.
                            let users = [
                                  { id: 1, name: "Amit" },
                                  { id: 2, name: "Neha" }
                                        ];
          6.Typed arrays
          7. sparse arrays



                 Most important array methods are :-
                    1.Add/Remove
                        = push() -add at the end
                        = pop()  -remove from the end
                        = shift() - add at the front
                        = unshift() - remove from the end

                     2.Looping Methods 
                        = map()
                            it transforms each element and return a new array.
                        = filter()
                             it select elements based on condition
                        = reduce()
                             it reduces array to a single value
                        =foreach()
                             loops through array (no return value)

                     3.searching methods
                        =includes()
                             it checks if the value exists in the array or not
                        =indexof()
                             it returns the index of the element from the array
                        =find()
                             it finds the element present in the array
                        =findIndex()
                              it finds the element based on the index position

                     4.Modify
                        =slice()
                            extract a portion of an array and returns a new array
                        =splice()
                             it adds/removes/replaces elements in the original array

                      
                      */