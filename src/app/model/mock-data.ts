import { Budget } from "./budget";

export let BUDGET: Budget[] = [
    
    {
        "budgetId": 1,
        "projectName": "laptop",
        "budgetYear": "FY22",
        "budgetAmount": 40000,
        "assetClass": "Computer",
        "department": "IT",
        "businessJustification": "New laptops for new hires",
        "requestor": "John Doe",
        "status": "Approved",
        "actualSpending": 38000,
        "remainingBudget": 0
    },

    {
        "budgetId": 2,
        "projectName": "office improvement",
        "budgetYear": "FY23",
        "budgetAmount": 100000,
        "assetClass": "Leasehold Improvement",
        "department": "Facility",
        "businessJustification": "Renovate offices and cubicle",
        "requestor": "Jake Spark",
        "status": "Pending",
        "actualSpending": 60000,
        "remainingBudget": 0
    },
    {
        "budgetId": 3,
        "projectName": "Furniture",
        "budgetYear": "FY22",
        "budgetAmount": 30000,
        "assetClass": "Office furniture",
        "department": "Facility",
        "businessJustification": "New furniture for new hires",
        "requestor": "Jake Spark",
        "status": "Approved",
        "actualSpending": 0,
        "remainingBudget": 0
    },
];