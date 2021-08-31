// Stacks! //

// function: push, pop, peek, length

// var letters = []; // this is our stack

// var word = "racecar"

// var rword = "";

// // put letters of word into stack
// for (var i = 0; i < word.length; i++) {
//     letters.push(word[i]);
// }

// //pop off the stack in reverse order
// for (var i = 0; i < word.length; i++) {
//     rword += letters.pop();
// }

// if (rword === word) {
//     console.log(word + " is a palindrome.");
// }
// else {
//     console.log(word + " is not a palindrom.");
// }

// Create a stack
// var Stack = function() {
//     this.count = 0;
//     this.storage = {};

//     // Adds a value onto the end of the stack
//     this.push = function(value) {
//         this.storage[this.count] = value;
//         this.count++;
//     }

//     // Removes and returns the value at the end of the stack
//     this.pop = function() {
//         if(this.count === 0) {
//             return undefined;
//         }

//         this.count--;
//         var result = this.storage[this.count];
//         delete this.storage[this.count];
//         return result;
//     }

//     this.size = function() {
//         return this.count;
//     }

//     // Returns the value at the end of the stack
//     this.peek = function(value) {
//         return this.storage[this.count-1];
//     }
// }


// var myStack = newStack();

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("freeCodeCamp");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());



// Sets
// function mySet() {
//     // the var collection will hold the set
//     var collection = [];
//     // this method will check for the presences of an element and return true or false
//     this.has = function(element) {
//         return (collection.indexOf(element) !== -1);
//     };
//     // this method will return all the values in the set
//     this.values = function() {
//         return collection;
//     };
//     // this method will add an element to the set
//     this.add = function(element) {
//         if(!this.has(element)){
//             collection.push(element);
//             return true;
//         }
//         return false;
//     };
//     // this method will remove an element from a set
//     this.remove = function(element) {
//         if(this.has(element)){
//             index = collection.indexOf(element);
//             collection.splice(index,1);
//             return true;
//         }
//         return false;
//     };
//     // this method will return the size of the collection
//     this.size = function() {
//         return collection.length;
//     };
//     // this method will return the union of two sets
//     this.union = function(otherSet) {
//         var unionSet = new mySet();
//         var firstSet = this.values();
//         var secondSet = otherSet.values();
//         firstSet.forEach(function(e){
//             unionSet.add(e);
//         });
//         secondSet.forEach(function(e){
//             unionSet.add(e);
//         });
//         return unionSet;
//     };
//     // this method will return the intersection of two sets as a new set
//     this.intersection = function(otherSet) {
//         var intersectionSet = new mySet();
//         var firstSet = this.values();
//         firstSet.forEach(function(e){
//             if(otherSet.has(e)){
//                 intersectionSet.add(e);
//             }
//         });
//         return intersectionSet;
//     };
//     // this method will return the difference of two sets as a new set
//     this.difference = function(otherSet) {
//         var differenceSet = new mySet();
//         var firstSet = this.values();
//         firstSet.forEach(function(e){
//             if(!otherSet.has(e)){
//                 differenceSet.add(e);
//             }
//         });
//         return differenceSet;
//     };
//     // this method will test if the set is a subset of a different set
//     this.subset = function(otherSet) {
//         var firstSet = this.values();
//         return firstSet.every(function(value) {
//             return otherSet.has(value);
//         });
//     };
// }
// var setC = new mySet();
// var setD = new mySet();
// setC.add("a");
// setD.add("b");
// setD.add("c");
// setD.add("a");
// setD.add("d");
// console.log(setD.values())
// setD.delete("a");
// console.log(setD.has("a"));
// console.log(setD.add("d"));



// Queues

// function Queue () {
//     collection = [];
//     this.print = function() {
//         console.log(collection);
//     };
//     this.enqueue = function(element) {
//         collection.push(element);
//     };
//     this.dequeue = function() {
//         return collection.shift();
//     };
//     this.front = function() {
//         return collection[0];
//     };
//     this.size = function() {
//         return collection.length;
//     };
//     this.isEmpty = function() {
//         return (collection.length === 0);
//     };
// }

// var q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

// function PriorityQueue() {
//     var collection = [];
//     this.printCollection = function() {
//         (console.log(collection));
//     };
//     this.enqueue = function(element){
//         if (this.isEmpty()){
//             collection.push(element);  
//         } else {
//             var added = false;
//             for (var i=0; i<collection.length; i++){
//                 if (element[1] < collection[i][1]){ // checking priorities
//                     collection.splice(i,0,element);
//                     added = true;
//                     break;
//                 }
//             }
//             if (!added){
//                 collection.push(element);
//             }
//         }
//     };
//     this.dequeue = function() {
//         var value = collection.shift();
//         return value[0];
//     };
//     this.front = function() {
//         return collection[0];
//     };
//     this.size = function() {
//         return collection.length;
//     };
//     this.isEmpty = function() {
//         return (collection.length === 0);
//     };
// }

// var pq = new PriorityQueue();
// pq.enqueue(['Beau Carnes', 2]);
// pq.enqueue(['Quincy Larson', 3]);
// pq.enqueue(['Ewa Mitulska-Wojcik', 1])
// pq.printCollection();
// pq.dequeue();
// pq.front();
// pq.printCollection();



// Binary Search Tree

// class Node {
//     constructor(data, left = null, right = null) {
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }
//     add(data) {
//         const node = this.root;
//         if (node === null) {
//             this.root = new Node(data);
//             return;
//         }   else {
//             const searchTree = function(node) {
//                 if (data < node.data) {
//                     if(node.left === null) {
//                         node.left = new Node(data);
//                         return;
//                     }   else if (node.left !== null) {
//                         return searchTree(node.left);
//                     }
//                 } else if (data > node.data) {
//                   if (node.right === null) {
//                     node.right = new Node(data);
//                     return;
//                 } else if (node.right !== null) {
//                     return searchTree(node.right);
//                 }
//             }   else {
//                 return null;
//             }
//         };
//         return searchTree(node);
//     } 
// }
// findMin() {
//     let current = this.root;
//     while (current.left !== null) {
//         current = current.left;
//     }
//     return current.data;
// }
// findMax() {
//     let current = this.root;
//     while (current.right !== null) {
//         current = current.right;
//     }
//     return current.data;
// }
// find(data) {
//     let current = this.root;
//     while (current.data !== data) {
//         if (data < current.data) {
//             current = current.left;
//         } else {
//             current = current.right;
//         }
//         if (current === null) {
//             return null;
//         }
//     }
//     return current;
// }
// }

// isPresent(data); {
//     let current = this.root;
//     while (current) {
//         if (data === current.data) {
//             return true;
//         }
//         if (data < current.data) {
//             current = current.left;
//         } else {
//             current = current.right;
//         }
//     }
//     return false;
// }
// remove(data); {
//     const removeNode = function(node, data) {
//         if (node == null) {
//             return null;
//         }
//         if (data == node.data) {
//             // node has no children
//             if (node.left == null && node.right == null) {
//                 return null;
//             }
//             // node has no left child
//             if (node.left == null) {
//                 return node.right;
//             }
//             // node has no right child
//             if (node.right == null) {
//                 return node.left;
//             }
//             // node has two children
//             var tempNode = node.right;
//             while (tempNode.left !== null) {
//                 tempNode = tempNode.left;
//             }
//             node.data = tempNode.data;
//             node.right = removeNode(node.right, tempNode.data);
//             return node;
//         } else if (data < node.data) {
//             node.left = removeNode(node.left, data);
//             return node;
//         } else {
//             node.right = removeNode(node.right, data);
//             return node;
//         }
//     }
//     this.root = removeNode(this.root, data);
// }


// const bst = new BST();

// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// bst.remove(4);
// console.log(bst.findMin());
// console.log(bst.findMax());
// console.log(bst.findMax());
// console.log(bst.isPresent(4));




// Binary Search Tree

// class Node {
//     constructor(data, left = null, right = null) {
//         this.data = data;
//         this.left = left;
//         this.right = right;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }
//     add(data) {
//         const node = this.root;
//         if (node === null) {
//             this.root = new Node(data);
//             return;
//         } else {
//             const searchTree = function(node) {
//                 if (data < node.data) {
//                     if (node.left === null) {
//                         node.left = new Node(data);
//                         return;
//                     } else if (node.left !== null) {
//                         return searchTree(node.left);
//                     }
//                 } else if (data > node.data) {
//                     if (node.right === null) {
//                         node.right = new Node(data);
//                         return;
//                     } else if (node.right !== null) {
//                         return searchTree(node.right);
//                     }
//                 } else {
//                     return null;
//                 }
//             };
//             return searchTree(node);
//         }
//     }
//     findMin() {
//         let current = this.root;
//         while (current.left !== null) {
//             current = current.left;
//         }
//         return current.data;
//     }
//     findMax() {
//         let current = this.root;
//         while (current.right !== null) {
//             current = current.right;
//         }
//         return current.data;
//     }
//     find(data) {
//         let current = this.root;
//         while (current.data !== data) {
//             if (data < current.data) {
//                 current = current.left;
//             } else {
//                 current = current.right;
//             }
//             if (current === null) {
//                 return null;
//             }
//         }
//         return current;
//     }
//     isPresent(data) {
//         let current = this.root;
//         while (current) {
//             if (data === current.data) {
//                 return true;
//             }
//             if (data < current.data) {
//                 current = current.left;
//             } else {
//                 current = current.right;
//             }
//         }
//         return false;
//     }
//     remove(data) {
//         const removeNode = function(node, data) {
//             if (node == null) {
//                 return null;
//             }
//             if (data == node.data) {
//                 // node has no children
//                 if (node.left == null && node.right == null) {
//                     return null;
//                 }
//                 // node has no left child
//                 if (node.left == null) {
//                     return node.right;
//                 }
//                 // node has no right child
//                 if (node.right == null) {
//                     return node.left;
//                 }
//                 // node has two children
//                 var tempNode = node.right;
//                 while (tempNode.left !== null) {
//                     tempNode = tempNode.left;
//                 }
//                 node.data = tempNode.data;
//                 node.right = removeNode(node.right, tempNode.data);
//                 return node;   
//             } else if (data < node.data) {
//                 node.left = removeNode(node.left, data);
//                 return node;
//             } else {
//                 node.right = removeNode(node.right, data);
//                 return node;
//             }
//         }
//         this.root = removeNode(this.root, data);
//     }
//     isBalanced() {
//         return (this.findMinHeight() >= this.findMaxHeight() - 1)
//     }
//     findMinHeight(node = this.root) {
//         if (node == null) {
//             return -1; 
//         };
//         let left = this.findMinHeight(node.left);
//         let right = this.findMinHeight(node.right);
//         if (left < right) {
//             return left + 1;
//         } else {
//             return right + 1; 
//         };
//     }
//     findMaxHeight(node = this.root) {
//         if (node == null) {
//             return -1;
//         };
//         let left = this.findMaxHeight(node.left);
//         let right = this.findMaxHeight(node.right);
//         if (left > right) {
//             return left + 1;
//         } else {
//             return right + 1;
//         };
//     }
//     inOrder() {
//         if (this.root == null) {
//             return null;
//         } else {
//             var result = new Array();
//             function traverseInOrder(node) {
//                 node.left && traverseInOrder(node.left);
//                 result.push(node.data);
//                 node.right && traverseInOrder(node.right);
//             }
//             traverseInOrder(this.root);
//             return result;
//         };
//     }
//     preOrder() {
//         if (this.root == null) {
//             return null;
//         } else {
//             var result = new Array();
//             function traversePreOrder(node) {
//                 result.push(node.data);
//                 node.left && traversePreOrder(node.left);
//                 node.right && traversePreOrder(node.right);
//             };
//             traversePreOrder(this.root);
//             return result;
//         };
//     }
//     postOrder() {
//         if (this.root == null) {
//             return null;
//         } else {
//             var result = new Array();
//             function traversePostOrder(node) {
//                 node.left && traversePostOrder(node.left);
//                 node.right && traversePostOrder(node.right);
//                 result.push(node.data);
//             };
//             traversePostOrder(this.root);
//             return result;
//         }
//     }

//     levelOrder() {
//         let result = [];
//         let Q = [];
//         if (this.root != null) {
//             Q.push(this.root);
//             while(Q.length > 0) {
//                 let node = Q.shift();
//                 result.push(node.data);
//                 if (node.left != null) {
//                     Q.push(node.left);
//                 };
//                 if (node.right != null) {
//                     Q.push(node.right);
//                 };
//             };
//             return result;
//         } else {
//             return null;
//         };
//     };
// }

// const bst = new BST();

// bst.add(9);
// bst.add(4);
// bst.add(17);
// bst.add(3);
// bst.add(6);
// bst.add(22);
// bst.add(5);
// bst.add(7);
// bst.add(20);

// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// bst.add(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// // console.log('inOrder: ' + bst.inOrder());
// // console.log('preOrder: ' + bst.preOrder());
// // console.log('postOrder: ' + bst.postOrder());
// // console.log('levelOrder: ' + bst.levelOrder());




// Hash Table

// var hash = (string, max) => {
//     var hash = 0;
//     for (var i = 0; i < string.length; i++) {
//         hash += string.charCodeAt(i);
//     }
//     return hash % max;
// };

// let HashTable = function() {

//     let storage = [];
//     const storageLimit = 4;

//     this.print = function() {
//         console.log(storage)
//     }

//     this.add = function(key, value) {
//         var index = hash(key, storageLimit);
//         if (storage[index] === undefined) {
//             storage[index] = [
//                 [key, value]
//             ];
//         } else {
//             var inserted = false;
//             for (var i = 0; i < storage[index].length; i++) {
//                 if (storage[index][i][0] === key) {
//                     storage[index][i][1] = value;
//                     inserted = true;
//                 }
//             }
//             if (inserted === false) {
//                 storage[index].push([key, value]);
//             }
//         }
//     };

//     this.remove = function(key) {
//         var index = hash(key, storageLimit);
//         if (storage[index].length === 1 && storage[index][0][0] === key) {
//             delete storage[index];
//         } else {
//             for (var i = 0; i < storage[index].length; i++) {
//                 if (storage[index][i][0] === key) {
//                     delete storage[index][i];
//                 }
//             }
//         }
//     };

//     this.lookup = function(key) {
//         var index = hash(key, storageLimit);
//         if (storage[index] === undefined) {
//             return undefined;
//         } else {
//             for (var i = 0; i < storage[index].length; i++) {
//                 if (storage[index][i][0] === key) {
//                     return storage[index][i][1];
//                 }
//             }
//         }
//     };

// };

// console.log(hash('beau', 10))

// let ht = new HashTable();
// ht.add('beau', 'person');
// ht.add('fido', 'dog');
// ht.add('rex', 'dinosour');
// ht.add('tux', 'penguin');
// console.log(ht.lookup('tux'))
// ht.print();





// Linked List

function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function(element){
        this.element = element;
        this.next = null;
    };

    this.size = function(){
        return length;
    };

    this.head = function(){
        return head;
    };

    this.add = function(element) {
        var node = new Node(element);
        if(head === null){
            head = node;
        } else {
            var currentNode = head;

            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    };

    this.remove = function(element){
        var currentNode = head;
        var previousNode;
        if(currentNode.element === element){
            head = currentNode.next;
        } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length --;
    };

    this.isEmpty = function() {
        return length === 0;
    };

    this.indexOf = function(element) {
        var currentNode = head;
        var index = -1;

        while(currentNode){
            index++;
            if(currentNode.element === element){
                return index;
            }
            currentNode = currentNode.next;
        }

        return -1;
    };

    this.elementAt = function(index) {
        var currentNode = head;
        var count = 0;
        while (count < index){
            count ++;
            currentNode = currentNode.next
        }
        return currentNode.element;   
    };

    this.addAt = function(index, element){
        var node = new Node (element);

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if(index > length){
            return false;
        }

        if(index === 0){
            node.next = currentNode;
            head = node;
        } else {
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }
}