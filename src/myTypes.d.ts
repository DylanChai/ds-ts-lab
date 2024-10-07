// src/myTypes.d.ts

// Friend interface with optional properties for dob and interests
export interface Friend {
  name: string;
  phone: string;
  dob?: Date;   // Optional
  age: number;
  interests?: string[];   // Optional
}

// Colleague interface
export interface Colleague {
  name: string;
  department: string;
  contact: {
    email: string;
    extension: number;
  };
}

// Extended ColleagueV2 interface with optional slack property and a union for department
export type Department = "Engineering" | "Finance" | "HR";

export interface ColleagueV2 {
  name: string;
  department: Department;  // Restricted to specific departments
  contact: {
    email: string;
    extension: number;
    slack?: string;  // Optional slack contact
  };
}

// ColleagueHistory interface containing both current and former colleagues
export interface ColleagueHistory {
  current: Colleague[];
  former: Colleague[];
}

// EmailContact interface with name and email
export interface EmailContact {
  name: string;
  email: string;
}

// Buddy type, can be either a Friend or a ColleagueV2
export type Buddy = Friend | ColleagueV2;

// Administrator type, can be a Buddy, a string, or undefined
export type Administrator = Buddy | string | undefined;

// BuddyList interface, including a name, administrator, and a list of members (Buddies)
export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};

// Partial version of Friend (all properties optional)
export type FriendPartial = Partial<Friend>;

// EventPass type, similar to Colleague but omitting the contact property and adding a passCode
export type EventPass = Omit<Colleague, "contact"> & {
  passCode: number;
};

// SecureFriendContact type, which is a readonly version of Friend with only name and phone
export type SecureFriendContact = Readonly<Pick<Friend, "name" | "phone">>;
