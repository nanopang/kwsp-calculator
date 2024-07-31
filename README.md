# README

This README file provides information about the `kwsp-calculator` project.

## Description

The `kwsp-calculator` is a TypeScript project that aims to calculate the contributions and returns for the Malaysian Employees Provident Fund (EPF), also known as KWSP.

## Usage
```typescript
import { calculateKWSP } from 'kwsp-calculator';

const result = getContribution({
  wages: 5000, 
  employeePercentage: 11, // optional, default is 11
  age: 30, // optional, default is 0
}
);
console.log(result);
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
