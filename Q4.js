function foo1()
{
return {
bar: "hello"
};
}
function foo2()
{
return
{
bar: "hello"
};
}

console.log("foo1 returns: " + foo1());
console.log("foo2 returns: " + foo2());


Output :
 "foo1 returns: [object Object]"
 "foo2 returns: undefined"

Reason :
 The curly brace argument only applies to object literals, for code blocks putting them on the next line is fine.