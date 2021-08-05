const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

const name1 = Object.create(name);
console.log(name1);

const mer = Object.assign(name, details);
console.log(mer);

print(mer);