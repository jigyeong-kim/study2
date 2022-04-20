//1분 퀴즈

//--------------------------------
//arr라는 배열이 있을 때, 배열의 마지막에서 세 번째 요소를 찾아보세요.

const arr = [1, 2, 3, 4, 5]
arr[arr.length - 1] //마지막 인덱스 
5
arr[arr.length - 3] //끝에서 3번째 인덱스
3


//--------------------------------
//다음 배열에서 ‘라’를 모두 제거하세요. indexOf와 splice를 사용하세요.

//----while문----

while(arr.indexOf('라') > -1) {
    arr.splice(arr.indexOf('라'), 1)
}
['라']
arr
(3) ['가', '다', '마']

//----for문----

for(i = 0; -1 < arr.indexOf('라'); i++){
    arr.splice(arr.indexOf('라'), 1)
}
arr
(3) ['가', '다', '마']

//----변수 선언-----

let index = arr.indexOf('라');
while(-1 < index){
    arr.splice(index, 1);
}
arr
(3) ['가', '다', '마']


while(-1 < index){
    arr.splice(index, 1);
    index=arr.indexOf('라');
}
arr
(3) ['가', '다', '마']

//질문하기 
//영상에서는 안될거라고 했는데 됨