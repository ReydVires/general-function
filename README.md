# general-function

A package for some general function and array operations

<img src='https://img.shields.io/badge/Version-0.1.0-brightgreen'  alt="Version: 0.1.0"/>

## usage (ES6)

```javascript
import { shuffle, sortArrayOfNumber, sortArrayOfObject, sortArrayOfString } from "general-function";

const arrOfNum = [1, 2, 3, 4, 100, 0];
sortArrayOfNumber(arrOfNum); // Result: [0, 1, 2, 3, 4, 100]
sortArrayOfNumber(arrOfNum, true); // Result: [100, 4, 3, 2, 1, 0]
shuffle(arrOfNum);

const arrOfStr = ["A", "C", "B", "E", "Z", "Y"];
sortArrayOfString(arrOfStr); // Result:  ["A", "B", "C", "E", "Y", "Z"];
sortArrayOfString(arrOfStr, true); // Result: ["Z", "Y", "E", "C", "B", "A"]

const arrOfObj = [
	{
		id: "011",
		name: "Alex",
		score: 87
	},
	{
		id: "001",
		name: "Brittle",
		score: 90
	},
	{
		id: "005",
		name: "Caspian",
		score: 91
	}
];
sortArrayOfObject(arrOfObj, "name");
sortArrayOfObject(arrOfObj, "id", true);
```

## method

`shuffle(array)`

- array: unknown[]

`sortArrayOfNumber (array [, descending])`

- array: number[]
- descending?: boolean

`sortArrayOfString (array [, descending])`

- array: string[]
- descending?: boolean

`sortArrayOfObject (array, property [, descending])`

- array: object[]
- property: string
- descending?: boolean

`isArrayOfNumber (array)`

- array: unknown[]
- RETURN `boolean`

`isArrayOfString (array)`

- array: unknown[]
- RETURN `boolean`

`isArrayOfObject (array)`

- array: unknown[]
- RETURN `boolean`

NPM Package: [Link](https://npmjs.com/package/general-function)
