/*********************************************************
 * CODE INSTRUCTIONS:                                    *
 * 1) The method findLargestSmallerKey you're            *
 *    asked to implement is located at line 26.          *
 * 2) Use the helper code below to implement it.         *
 * 3) In a nutshell, the helper code allows you to       *
 *    to build a Binary Search Tree.                     *
 * 4) Jump to line 71 to see an example for how the      *
 *    helper code is used to test findLargestSmallerKey. *
 *********************************************************/


// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  var currentNode = this.root;
  var result;
  
  while (currentNode) {
      if (currentNode.key<num){
          result = currentNode;
          currentNode = currentNode.right;
      }
      else if (currentNode.key==num){
          break;
      } 
      else {
          currentNode=currentNode.left;
      }
  }
  if ((!currentNode) || currentNode.key > num )
  {
      return result.key;
  }
  else
  {
      return currentNode.key;
  }
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if(!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new Node(key);

  while(currentNode !== null) {
      if(key < currentNode.key) {
          if(!currentNode.left) {
              currentNode.left = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.left;
          }
      } else {
          if(!currentNode.right) {
              currentNode.right = newNode;
              newNode.parent = currentNode;
              break;
          } else {
              currentNode = currentNode.right;
          }
      }
  }
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);
bst.insert(18);
//bst.insert(17);

var result = bst.findLargestSmallerKey(17);

console.log("Largest smaller number is " + result);


function calcDroneMinEnergy(route) {
    var energyUsed = route[0][2];
    var sortedArray = route.sort()[2];
    energyUsed = sortedArray[sortedArray.length-1]-energyUsed;
    
    return (energyUsed<0?0:energyUsed);
  }
  
  console.log(calcDroneMinEnergy([ [0,   2, 10],
                    [3,   5,  0],
                    [9,  20,  6],
                    [10, 12, 15],
                    [10, 10,  8] ]));