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
			cout << "极其富裕" << endl;
			break;
		
		case 2:
			cout << "富裕" << endl;
			break;
		
		case 3:
			cout << "相对富裕" << endl;
			break;
		
		case 4:
			cout << "小康" << endl;
			break;
		
		case 5:
			cout << "温饱" << endl;
			break;
			
		default:
			cout << "贫穷" << endl;
			break;	
	}
	
	return 0;
}
