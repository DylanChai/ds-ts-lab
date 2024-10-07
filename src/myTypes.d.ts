export interface Friend {
    name: string;
    phone: string;
    age: number
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export interface EmailContact {
  name: string;
  email: string
}

export const friends = [friend1, friend2];

export const colleagues = {colleague1, colleague2, colleague3};