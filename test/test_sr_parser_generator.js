"use strict";

const TERMINAL_IDS = {"<":0,"<<EOF>>":1,"==":2,"=~":3,">":4,"monitor":5,"notify":6,"num0":7,"num1":8,"param:number":9,"param:text":10,"qs0":11,"qs1":12,"thermostat.get_temp":13,"twitter.post":14,"twitter.search":15,"xkcd.get_comic":16};
const RULE_NON_TERMINALS = [5,5,8,2,2,11,11,11,9,4,4,4,1,1,6,6,7,7,10,10,3,3,3,3,3,0];
const ARITY = [1,1,2,2,2,1,2,2,2,1,1,1,2,1,2,2,1,1,1,1,3,3,3,3,3,2];
const GOTO = [{"2":6,"4":7,"5":2,"8":3,"9":4,"11":1},{"1":12,"3":14,"6":13},{},{},{"1":18},{"4":7,"11":19},{},{},{},{},{},{"7":23},{"6":26},{},{},{},{"10":31},{},{"6":26},{"3":14,"6":13},{"7":35},{"7":36},{"7":37},{},{},{},{},{"7":23},{"10":31},{"10":38},{"10":39},{},{},{},{"7":23},{},{},{},{},{}];
const PARSER_ACTION = [{"5":[1,5],"13":[1,9],"15":[1,10],"16":[1,8]},{"6":[1,15],"9":[1,11],"10":[1,16],"14":[1,17]},{"1":[0]},{"1":[2,1]},{"14":[1,17]},{"13":[1,9],"15":[1,10],"16":[1,8]},{"1":[2,0]},{"6":[2,5],"9":[2,5],"10":[2,5],"14":[2,5]},{"6":[2,9],"9":[2,9],"10":[2,9],"14":[2,9]},{"6":[2,10],"9":[2,10],"10":[2,10],"14":[2,10]},{"6":[2,11],"9":[2,11],"10":[2,11],"14":[2,11]},{"0":[1,20],"2":[1,21],"4":[1,22],"7":[1,24],"8":[1,25]},{"1":[2,4],"9":[1,27],"10":[1,28]},{"6":[2,6],"9":[2,6],"10":[2,6],"14":[2,6]},{"6":[2,7],"9":[2,7],"10":[2,7],"14":[2,7]},{"1":[2,3]},{"2":[1,29],"3":[1,30],"11":[1,32],"12":[1,33]},{"1":[2,13],"9":[2,13],"10":[2,13]},{"1":[2,2],"9":[1,27],"10":[1,28]},{"9":[1,34],"10":[1,16],"14":[2,8]},{"7":[1,24],"8":[1,25]},{"7":[1,24],"8":[1,25]},{"7":[1,24],"8":[1,25]},{"1":[2,14],"6":[2,14],"9":[2,14],"10":[2,14],"14":[2,14]},{"1":[2,16],"6":[2,16],"9":[2,16],"10":[2,16],"14":[2,16]},{"1":[2,17],"6":[2,17],"9":[2,17],"10":[2,17],"14":[2,17]},{"1":[2,12],"9":[2,12],"10":[2,12]},{"7":[1,24],"8":[1,25]},{"11":[1,32],"12":[1,33]},{"11":[1,32],"12":[1,33]},{"11":[1,32],"12":[1,33]},{"1":[2,15],"6":[2,15],"9":[2,15],"10":[2,15],"14":[2,15]},{"1":[2,18],"6":[2,18],"9":[2,18],"10":[2,18],"14":[2,18]},{"1":[2,19],"6":[2,19],"9":[2,19],"10":[2,19],"14":[2,19]},{"0":[1,20],"2":[1,21],"4":[1,22],"7":[1,24],"8":[1,25]},{"6":[2,22],"9":[2,22],"10":[2,22],"14":[2,22]},{"6":[2,20],"9":[2,20],"10":[2,20],"14":[2,20]},{"6":[2,21],"9":[2,21],"10":[2,21],"14":[2,21]},{"6":[2,23],"9":[2,23],"10":[2,23],"14":[2,23]},{"6":[2,24],"9":[2,24],"10":[2,24],"14":[2,24]}];
const SEMANTIC_ACTION = [
(async ($,$0) => { return $0; }),
(async ($,$0) => { return $0; }),
(async ($,stream,action) => `combine ${stream} with ${action}`),
(async ($,table,$0) => `${table} then notify`),
(async ($,table,action) => `combine ${table} with ${action}`),
(async ($,$0) => { return $0; }),
(async ($,get,ip) => `apply ${get} ${ip}`),
(async ($,table,filter) => `apply ${filter} to ${table}`),
(async ($,$0,table) => `monitor ${table}`),
(async ($,$0) => `xkcd.get_comic`),
(async ($,$0) => `thermostat.get_temp`),
(async ($,$0) => `twitter.search`),
(async ($,action,ip) => `apply ${action} ${ip}`),
(async ($,$0) => `twitter.post`),
(async ($,$0,num) => `number = ${num}`),
(async ($,$0,str) => `string = ${str}`),
(async ($,$0) => `num0`),
(async ($,$0) => `num1`),
(async ($,$0) => `qs0`),
(async ($,$0) => `qs1`),
(async ($,$0,$1,num) => `number == ${num}`),
(async ($,$0,$1,num) => `number > ${num}`),
(async ($,$0,$1,num) => `number < ${num}`),
(async ($,$0,$1,str) => `text == ${str}`),
(async ($,$0,$1,str) => `text =~ ${str}`),
(async ($, $0) => $0),
];
module.exports = require('../lib/sr_parser')(TERMINAL_IDS, RULE_NON_TERMINALS, ARITY, GOTO, PARSER_ACTION, SEMANTIC_ACTION);
