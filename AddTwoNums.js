var addTwoNumbers = function(l1, l2) {

  class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
  constructor(head = null) {
      this.head = head
  }
}
let current;
let head = (current = new ListNode());
let carry = 0;
let sum = 0;

while ( l1 || l2 ){

  if(l1 && l2) {
    sum = l1.val + l2.val + carry;
    l1 = l1.next;
    l2 = l2.next;
  } else if (l1) {
    sum = l1.val + carry;
    l1 = l1.next;
  }else if (l2){
    sum = l2.val + carry;
    l2 = l2.next;
  }

  carry = Math.floor(sum / 10);
  sum = Math.floor(sum) % 10;

  current.next = new ListNode(sum);
  current = current.next;
}

  if(carry === 1) current.next = new ListNode(1);
console.log(head); 
return head.next;

// let makeNodeList = (arr, listName) => {
//   let listName = new LinkedList(arr[0])
//   for(let i = 0; i < arr.length; i ++){
//     nodeArr.push(new ListNode(arr[i]))
//   }

//   return new LinkedList(nodeArr)
// }

let l1node1 = new ListNode(l1[0]);
let l1node2 = new ListNode(l1[1]);
l1node1.next = l1node2;

let l1List = new LinkedList(l1node1);

  console.log(l1node1,  "\n\n" , l1List);

  // const makeString = (arr) => {
  //   console.log("top", arr);
  //   arr.reverse();
  //   let temp ="";
  //   for(let i = 0; i <arr.length; i++){
  //     temp += String(arr[i]);
  //   }
  //   return temp;
  // }
  // const num1 = makeString(l1);
  // const num2 = makeString(l2);
  // console.log(num1);
  // console.log(num2);
  // let sum = Number(num1)+ Number(num2);
  // let sumArr = Array.from(String(sum), Number);
  // sumArr.reverse();

  // console.log(sumArr);
  //   return 

};

addTwoNumbers([2, 4, 3], [5, 6, 4]);

/*

addTwoNumbers = (l1, l2)=> {
  let carry = 0;
  var curr;
  let p = (curr = new ListNode(0));
  var sum = 0;
  while (l1 || l2) {

    if (l1 && l2) {
      sum = l1.val + l2.val + carry;
      l1=l1.next;
      l2=l2.next;
    } else if (l1) {
      sum = l1.val + carry;
      l1=l1.next;
    } else if (l2) {
      sum = l2.val + carry;
      l2=l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = Math.floor(sum) % 10;
    curr.next = new ListNode(sum);
    curr = curr.next;

  }

  if(carry===1)
    curr.next=new ListNode(carry);
  return p.next;
};

*/