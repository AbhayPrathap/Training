// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function mos(arr){
    var a = 1;
    var count =0;
    var ans;
    for(i=0;i<=arr.length;i++){
        for(j=i;j<=arr.length;j++){
            if(arr[i]==arr[j])
            {
                count ++;

            }
            if(count>a){
                a=count
                ans =arr[i]
            }
            
        }
        count =0;
    }
    console.log(ans)
}
mos([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])