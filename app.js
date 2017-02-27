function fsum(a,b,c)
{
	var fsum = a+b+c;
	console.log("findSum is : "+fsum);

}

function findSum()
{

	var sum = 0;

	for (var i=1; i<= 10; i++)
	{
	
	sum = sum + i;
}

	console.log("findSum is : "+sum);
}
fsum(1,2,3)
findSum()