var a;
console.log(a);

if (a === undefined){
    console.log('a is undefined');
} else 
{
    console.log('a is defined');
}

a = 'przemix'

if (a === undefined){
    console.log('a is undefined');
} else 
{
    console.log('a is defined', a);
}

/* undefined is defined in memory in setup vars phase while initializing
NEVER SET VARIABLE AS UNDEFINED
a = undefined;
it's dangerous!
its hard to tell if you set it, or javascript set it through initialize process
*/