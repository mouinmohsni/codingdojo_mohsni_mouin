class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // add given node to the head, if it exists. return void
    // list is empty?
    // list already has nodes?
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }
    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
    }

    read (){
        var runner = this.head;

        while (runner !== null){
            console.log( runner);
            runner= runner.next
        }
           console.log(runner) 

    }

    contains(value){
        var val =this.head;

        while (val != null){
            if (val.value === value){
                return true;
            }
            else{
                return false
            }
            val= val.next
        }
    }

    removeFromFront(){

    }
}

// instantiate the SLL
var myCoolSLL = new SLL(); //
// creating nodes
// var myNode = new Node(55);

// executing methods:
myCoolSLL.addToFront(new Node(55));
myCoolSLL.addToFront(new Node(100));


myCoolSLL.addToFront(new Node(100));
myCoolSLL.addToFront(new Node(44));
myCoolSLL.addToFront(new Node(33));
myCoolSLL.addToFront(new Node(22));
console.log(myCoolSLL);


// -------------------------
var firstNode = new Node(5);
// console.log(myCoolSLL);
// myCoolSLL.read();
console.log(myCoolSLL.contains(55));

