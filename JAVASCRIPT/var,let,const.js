// var is function-scoped, can be redeclared and reassigned. It is hoisted and initialized with undefined, which can sometimes cause unexpected behavior.

// let is block-scoped, cannot be redeclared in the same scope, but can be reassigned. It is hoisted but remains in the Temporal Dead Zone until initialized.

// const is also block-scoped, cannot be redeclared or reassigned. It must be initialized at declaration time. Like let, it is hoisted but exists in the Temporal Dead Zone.

// In modern JavaScript, we prefer const by default and use let only when reassignment is needed.

// If const cannot be reassigned, how can we modify an object declared with const?
//    => const prevents reassignment of the variable reference, not modification of object properties. Since objects are reference types, we can modify their internal properties, but we cannot reassign the variable to a new object.