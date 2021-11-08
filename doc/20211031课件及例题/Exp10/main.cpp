#include <iostream>

using namespace std;

int main() 
{
	int x, max;
	
	cin >> x;
	
	max = x>=0 ? x : -x;
	
	cout << max << endl;
	
	return 0;
}
