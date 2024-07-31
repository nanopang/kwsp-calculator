"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContribution = void 0;
const getContribution = (options) => {
    const { wages = 0, employeePercentage = 11, age = 0 } = options;
    const isAboveAge60 = age >= 60;
    if (employeePercentage < 0 || employeePercentage > 100) {
        // check has decimal
        if (employeePercentage % 1 !== 0) {
            throw new Error("Employee percentage should be an integer");
        }
        throw new Error("Employee percentage should be between 0 and 100");
    }
    let employeeRate = isAboveAge60 ? 0 : employeePercentage / 100;
    let employerRate = isAboveAge60 ? 0.04 : wages <= 5000 ? 0.13 : 0.12;
    if (wages <= 10) {
        return {
            employee: 0,
            employer: 0,
        };
    }
    if (wages <= 5000) {
        return {
            employee: Math.round(roundToNearestTwenty(wages) * employeeRate),
            employer: Math.round(roundToNearestTwenty(wages) * employerRate),
        };
    }
    if (wages <= 20000) {
        return {
            employee: Math.round(roundToNearestHundred(wages) * employeeRate),
            employer: Math.round(roundToNearestHundred(wages) * employerRate),
        };
    }
    return {
        employee: Math.round(wages * employeeRate),
        employer: Math.round(wages * employerRate),
    };
};
exports.getContribution = getContribution;
function roundToNearestTwenty(num) {
    return Math.round(num / 20) * 20;
}
function roundToNearestHundred(num) {
    return Math.round(num / 100) * 100;
}
