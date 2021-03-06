import death from '../api/death.json';
import person from '../api/person.json';
import condition from '../api/condition_occurrence.json';
import visit from '../api/visit_occurrence.json';

const data = {
    death: death.death,
    person: person.person,
    condition: condition.condition_occurrence,
    visit: visit.visit_occurrence,
};

export default data;
