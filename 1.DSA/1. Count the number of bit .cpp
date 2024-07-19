#include <iostream>
using namespace std;
 int x=-123;
 int result=0;
 int lastbit=0;

int main(int argc, const char** argv) {
	while(x!=0){
		lastbit=x%10;
		result=(result*10)+lastbit;
		x=x/10;
	}
	cout<<result;
}


