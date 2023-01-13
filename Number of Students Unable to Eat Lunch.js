// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

// If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
// Otherwise, they will leave it and go to the queue's end.
// This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

// You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.


// Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
// Output: 3

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while(students.length != 0){ // looping untill length of students = 0 OR not all students able to eat
     if(students[0] == sandwiches[0]){
// if the student can eat the sandwich, give it to him, and remove both of them from 2 arrays
         students.shift();
         sandwiches.shift();
     }else{
         if(!students.includes(sandwiches[0])){
// to check the ability of eating, will see if students contains the sandwitch or not, if not that means we won't be able to make all students eat!
             return students.length;
         }
// if yes, it contains the sandwich, we will push the current student to the end of the array and remove it from start
         students.push(students.shift())
     }
 }
 return students.length;
};
