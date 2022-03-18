var reverseList = function(head) {
    
  if(head == null || head.next == null){
    return head;
  }
  
  let prev = null; 
  let next = null; 
  
  while (head !== null){
      next = head.next; //making sure we know what the next node is for the next loop
      head.next = prev; //severing original node/pointer, and assigning head to be the last one pointing to null (prev)
      prev = head; // now the prev will be the first value - after null  
      head = next; //this is from the first line of while loop - this is the next step
  }
  
  return prev;   
};


reverseList([1,2,3,4,5]);
reverseList([1,2]);
reverseList([]);