function kgToLbs(weight: number | string): number { //union type for weight parameter
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}

kgToLbs(10);
kgToLbs("10kg");

//Intersection types

type Draggable = {
    darg: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    darg: () => { },
    resize: () => { }
}

//Literal Types
type Quantity = 50 | 100;
let quantity: Quantity = 50; //variable can take literaly definded by type values

type Metric = 'cm' | 'inch';

//Nullable types
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase())
    else
        console.log("Hola!")
}

greet(undefined)