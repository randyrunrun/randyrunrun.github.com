#include <iostream>

using namespace std;

int main() 
{
	int x;
	cin >> x;
	
	if(x>=0)
	{
		if(x>0)
		{
			cout << "正数" << endl;
		}
		else
		{
			cout << "0" << endl;
		}
	}
	else
	{
		cout << "负数" << endl;
	}
	 
	return 0;
}
