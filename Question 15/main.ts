console.log("Exercise No 15");

console.log(
  `Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
  
      • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
      
      • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
      
      • Print a second set of invitation messages, one for each person who is still in your list`
);

let myGuests: string[] = ["Shehraz", "Hassan", "Junaid", "Waqar"];

let unableToAttend: string = myGuests.pop()!;
console.log(`${unableToAttend} can't make it to the dinner.`);

let newGuest = "Kamran";
myGuests.push(newGuest);

myGuests.forEach((guests) =>
  console.log(`Dear ${guests}, you are invited for a dinner.`)
);
