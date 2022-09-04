//npm -global command, comes with node
//npm --version

//local dependency - use it only in the particular project
//npm i <packageName>

//global dependency - user it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)


// npm init (step by step initiation)
//npm init -y (everything default)

const _ = require('lodash');

const item = [1,[2, [3,"cse", [4]], "sarang"]]
const newItems = _.flattenDeep(item);
console.log(newItems)