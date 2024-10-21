let employee: {
    readonly id: number, //prevents modifying value
    name: string 
    position?: string, //optional field
    retire: (date: Date) => void //method that returns nothing :D
} = {
    id: 1, name: "Max",
    retire: (date: Date) => {
        console.log(date);
    }
};

//employee.id = 2; //Cannot assign to 'id' because it is a read-only property


//lets define custom type to simplify code

type Employee = {
    readonly id: number,
    name: string,
    position?: string,
    retire: (date: Date) => void
}

let employee2: Employee = {
    id: 2,
    name: "Bob",
    retire: (date: Date) => console.log(date)
}