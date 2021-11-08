#include <iostream>
#include<iomanip>

using namespace std;

int main() 
{
	double pi = 3.1415926;
	
	cout << pi << endl;
	
	cout << setiosflags(ios::fixed); //保证setprecision()是设置小数点后的位数 
	cout<<setprecision(2) << pi << endl; //输出3.14 
	
	cout << setprecision(2) << endl;
	cout<<pi<<endl; //输出3.14

	return 0;
}
