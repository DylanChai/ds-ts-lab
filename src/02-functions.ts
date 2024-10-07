import {Friend, Colleague, EmailContact } from './myTypes'
import { colleagues, friends } from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(f: Friend[]):string[]{
    const messages:string[] = [];
    for(const friend of f){
         older(friend)
         messages.push(`${friend.name} is now ${friend.age}`)
    }
    return messages;
}

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

  function addColleague(cs: Colleague[], name: string, department: string, email: string){
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: highestExtension(cs).contact.extension + 1
        }
    }
    cs.push(newColleague);
}

function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean): string[] {
    return friends.filter(criterion).map(friend => friend.name);
}

// Test the `findFriends` function
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));



console.log(older(friends[0]))
console.log(allOlder(friends))
console.log(highestExtension(colleagues.current));
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));