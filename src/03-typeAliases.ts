import { ColleagueV2, Friend, Buddy, BuddyList, Administrator } from "./myTypes";
import { friends } from "./01-basics";

const colleague1: ColleagueV2 = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2: ColleagueV2 = {
  name: "Dean Sullivan",
  department: "Finance",
  contact: {
    email: "dsullivan@company.com",
    extension: 122,
  },
};

function makeBuddyList(
  name: string,
  buddies: Buddy[],
  admin?: Administrator
): BuddyList {
  return {
    name,
    members: buddies,
    administrator: admin,
  } as BuddyList;
}

// Tests for makeBuddyList
const myFootballBuddies = makeBuddyList(
  "Football team",
  [colleague1, friends[0], colleague2],
  colleague1
);

const myBandBuddies = makeBuddyList(
  "Band name",
  [colleague1, friends[1]]
  // No administrator
);

console.log(myFootballBuddies);
console.log(myBandBuddies);

//--------------------------------------

function findBuddyContact(list: BuddyList, name: string): string | undefined {
  for (const buddy of list.members) {
    if (buddy.name === name) {
      if ("phone" in buddy) {
        return buddy.phone;
      } else {
        return buddy.contact.email;
      }
    }
  }
  return undefined;
}

function getBuddyListFriends(list: BuddyList): Friend[] {
  return list.members.reduce((friends: Friend[], buddy) => {
    // Check if the buddy is a Friend by checking if 'phone' property exists
    if ('phone' in buddy) {
      friends.push(buddy as Friend);  // Cast the buddy as Friend
    }
    return friends;
  }, []);
}

// Test for findBuddyContact.
console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));

// Test for getBuddyListFriends
console.log("Friends in myFootballBuddies: ", getBuddyListFriends(myFootballBuddies));
console.log("Friends in myBandBuddies: ", getBuddyListFriends(myBandBuddies));
