#include <iostream>

using namespace std;

int main() 
{
	int a, b, c, t;
	
	cin >> a >> b >> c;

	t = a;
	
	if(t<b)
	{
		t = b;
	}
	
	if(t<c)
	{
		t = c;
	}

	cout << t << endl;

	return 0;
}
