const Name=new Function('name' ,'return "Hi "+name');
        console.log(Name("akhila"));

const printBill = (name, bill) => {
            return `Hi ${name}, please pay: ${bill}`;
}
console.log(printBill('akhila',100));

const person = {
    pname: "Noam Chomsky",
    age: 92
}

const {pname,age} = person;
console.log(pname);
console.log(age);