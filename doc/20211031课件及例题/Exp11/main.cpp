#include <iostream>

using namespace std; 

int main() 
{
	int n;
	
	double x, y;
	
	cin >> x >> y;
	
	n = 100 * x / y + 0.5;
	
	switch(n/10)
	{
		case 0:case 1:
			cout << "���主ԣ" << endl;
			break;
		
		case 2:
			cout << "��ԣ" << endl;
			break;
		
		case 3:
			cout << "��Ը�ԣ" << endl;
			break;
		
		case 4:
			cout << "С��" << endl;
			break;
		
		case 5:
			cout << "�±�" << endl;
			break;
			
		default:
			cout << "ƶ��" << endl;
			break;	
	}
	
	return 0;
}
