
Basics: JavaScript has two different approaches for testing equality. 
Primitives like strings and numbers are compared by their value, 
while objects like arrays, dates, and user defined objects are compared by their reference. 
This means it compares whether two objects are referring to the same location in memory.
  

Answer: Equality check will check whether two objects have same value for same property.
To check that, you can get the keys for both the objects. 
If the number of properties doesn't match, these two objects are not equal. Secondly, 
you will check each property whether they have the same value. 
If all the properties have same value, they are equal.
