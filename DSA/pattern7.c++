#include <iostream>
using namespace std;

int main (){

int n =0;
cout<<"enter the lines of the star to appear"<<endl;
cin>>n;
 int k=1;       

    for(auto j =0;j<n;){
for(auto i =1;i<=n;i++){
    // cout<<"*"<<n<<endl;
    char s = '*';
    if(i==n){
        for(int j=0;j<k;j++){
            
        cout<<s;
        }
    }else{
        cout<<" ";
    }
}
        cout<<endl;
    k +=2;
    n--;
    }
    

}