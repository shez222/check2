// /utils/calculations.ts
import { Person } from '@/models/person';

export const calculateCompanyCounts = (people: Person[]) => {
    const counts: { [key: string]: number } = {};
    people.forEach((person) => {
        counts[person.company] = (counts[person.company] || 0) + 1;
    });
    return counts;
};