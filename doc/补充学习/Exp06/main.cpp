#include <iostream>
#include<iomanip>

using namespace std;

int main() 
{
	double pi = 3.1415926;
	
	cout << pi << endl;
	
	cout << setiosflags(ios::fixed); //��֤setprecision()������С������λ�� 
	cout<<setprecision(2) << pi << endl; //���3.14 
	
	cout << setprecision(2) << endl;
	cout<<pi<<endl; //���3.14

	return 0;
}
