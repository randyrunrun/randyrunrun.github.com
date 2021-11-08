#include <iostream>
#include <cmath>
using namespace std; 

int main() 
{
	// a、b、c表示x的百位、十位、个位 
	int x, a, b, c;
	
	cin >> x;
	
	c = x%10;
	b = x / 10 % 10;
	a = x / 100;
	
	if(x == pow(c,3)+pow(b,3)+pow(a,3))
	{
		cout << "Yes" << endl;
	}
	else
	{
		cout << "No" << endl;
	}
	
	
	return 0;
}
