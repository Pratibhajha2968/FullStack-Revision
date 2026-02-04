1. DataTypes :- DataTypes in java describe what type of data a variable can store.

 DataTypes are of two types :-
    1.Primitive DataTypes
       a.char
       b.long
       c.int 
       d.double
       e.float
       f.boolean
       g.short
       h.byte 
    2.Non Primitive DataTypes
        a.String
        b.array
        c.object
        d.interface
        e.class   


2.   Loops in java :-loops in java are used for iterating a number. We cant write each and everything again and again so we used loops.

   OR In technical word we can say loops are used to execute a block of code repeatedly until the required condition is satisfied.

   Types of loops :-
       1. for loop 
          => used when number of counts are known.
          ex: for(i=0;i<=10;i++)
       2. foreach loop
          => it is the modern or enhanced loops which are used mostly .it is used in arrays and other methods.
          ex: int arr[] ={1,2,3,};
               for(int num : arr){
                  syso;
                  i++;
               }
       3. do-while loop
         => used for atleast one iteration
         ex: int i=6;
         do(
            syso;
            i++;
         )while(i<=8)
       4. while loop
           => used when number of counts are not known
          ex: int i=3;
          while(i<=5)
            syso;
            i++;


3. Conditions in java :-Conditions are used to make decision based on the required condition which is true or false.

   Types of condition:-
    1.if condition
      => used when there is only one condition that is true.
      ex: int age = 18;
              if(age >= 18) {
            System.out.println("Eligible to vote");
             }
    2.if-else condition
      => used when there are two condition both true and false.
      ex: int num=6;
           if(num % 4==0){
            syso(true);
           }else{
            syso(false);
           }
    3.if-else-if condition
      => it used for multiple condition 
      ex: int marks = 75;
           if(marks >= 90) {
             System.out.println("A");
            } else if(marks >= 60) {
             System.out.println("B");
            } else {
             System.out.println("C");
            }
    4.switch condition
      => used for comparing one variable with many values.
      ex: int day = 2;
            switch(day) {
            case 1: System.out.println("Monday"); break;
            case 2: System.out.println("Tuesday"); break;
            default: System.out.println("Invalid");
            }


   Operators used in condition are :-
         1.==(equal)
         2.!=(not equal)
         3.>(greater than)
         4.<(less than)
         5.&&(and opeartor)
         6.!(not opeartor)


 4. Methods :- A block of code that runs when called and can take inputs and return output.
 
      In Java, methods:
        Must be inside a class
        Have a return type
        Are strongly typed

        In java methods can be declare on the basis of parameters and return type :-
                1.with no parameters and no return type
                2.with no parameters and return type
                3.with parameters and no return type
                4.with parameters and return type 
