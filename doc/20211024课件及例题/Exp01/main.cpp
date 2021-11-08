#include <iostream>
#include <cmath> 
using namespace std; 

int main() 
{
	int x, a, b, c;
	
	cin >> x;
	
	c = x%10;
	b = x / 10 % 10;
	a = x / 100;
	
	cout << a + b + c << endl;
	
	return 0;
}
