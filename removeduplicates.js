var deleteDuplicates = function(head) {
     if (!head) return head;// empty list
     let current=head
     while(current && current.next){
         if(current.val=== current.next.val){
              // skip the duplicate node
            current.next=current.next.next;
         }
         else{
                // move forward
            current=current.next;
         }
     }
 return head
    

};

deleteDuplicates(1,1,2,)