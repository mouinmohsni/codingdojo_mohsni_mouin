
class node {
    constructor(val) { 
        this.val = val
        his.next = null
     }
  }



  // class for the SLL
// what will hold all the nodes
class SLL {
    constructor() {
        this.head = null;
    }

    // -- methods --
    isEmpty() {
        if (this.head) {
            return false;
        } else {
            return true;
        }
    }

    addToFront(node) {
        node.next=this.head;
        this.head=node;
    }
    
}
var n5 = new Node(99);
console.log(n5);