const set = new Set(['Beethoven','Mozart','Chopin','Chopin']);
console.log(set);
set.delete('Beethoven');
console.log(set);


Output: 
Set { 'Beethoven', 'Mozart', 'Chopin' }
Set { 'Mozart', 'Chopin' }