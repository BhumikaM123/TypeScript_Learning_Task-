 let numbers: number[] = [1, 2, 3];
  let fruits: string[] = ["apple", "banana", "orange"];
  
  // Push and pop
  numbers.push(4);
  let poppedNumber: number | undefined = numbers.pop();
  
  // Iterating through array
  for (let fruit of fruits) {
    console.log(fruit);
  }
  
  let person: { name: string; age: number } = {
      name: "John",
      age: 25,
    };
  
    // Define a type for the object
  type Person = {
      name: string;
      age: number;
    };
    
    // Use the defined type
    let anotherPerson: Person = {
      name: "Alice",
      age: 30,
    };
  
    // Accessing object properties
  let personName: string = person.name;
  let personAge: number = person.age;