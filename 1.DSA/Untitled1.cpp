#include<iostream>
#include<cmath>
using namespace std;

bool sta(int n) {
    if (n <= 1) {
        return false;
    }
   for (int j=2;j<=n;j++){
   	 for (int i = 2; i <= j/2; i++) {
        if (j % i == 0) {
            return false;
        }
    }
    return true;
   }
}

int main() {
    int n = 10;
    while (n != 0) {
        cout << "Enter the number" << "\t";
        cin >> n;
        cout << "is prime: " << sta(n) << endl;
        n--;
    }
    return 0;
}

