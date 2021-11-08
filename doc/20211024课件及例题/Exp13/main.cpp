#include <iostream>

using namespace std;

int main() 
{
	int d;
	
	cin >> d;
	
	if(d%7 == 0)
	{
		cout << 7 << endl;
	}
	else
	{
		cout << d%7 << endl;
	}
	
	return 0;
}
