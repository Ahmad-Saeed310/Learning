#include <iostream>
using namespace std;
int main(){
    int n =0;
    int position =0;
    cout<<"enter a number";
    cin>>n;
    for(auto i =0;i<n;i+=2){
        cout<<i;
        if(position<i){
        for(auto k=n;k>i;k--){
            cout<<"*";
        }}
        else{cout<<" ";}
        cout<<endl;
    }
        position++;
}
