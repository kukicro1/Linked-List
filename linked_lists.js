class Node {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor(head = null, length = 0) {
    this.head = head
    this.length = length
  }

  append(value) {
    if (this.head === null) {
      this.prepend(value)
    } else {
      let currentNode = this.head
      while (currentNode.next != null) {
        currentNode = currentNode.next
      }
      currentNode.next = new Node(value)
      this.length++
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head)
    this.length++
  }

  size() {
    console.log(this.length)
  }

  firstItem() {
    console.log(this.head)
  }

  tail() {
    if (this.head === null) {
      console.log('There is not any element in the list.')
    } else {
      let currentNode = this.head
      while (currentNode.next != null) {
        currentNode = currentNode.next
      }
      console.log(currentNode)
    }
  }

  at(index) {
    if (this.head === null) {
      console.log('There is not any element in the list.')
    } else {
      let counter = 0
      let currentNode = this.head
      while (currentNode.next != null) {
        counter++
        if (counter === index) {
          return console.log(currentNode)
        }
        currentNode = currentNode.next
      }
      if (currentNode.next === null) {
        counter++
        if (counter === index) return console.log(currentNode)
      }
      if (counter != index) return console.log('Enter valid index.')
    }
  }

  pop() {
    if (this.head === null) {
      console.log('There is not any element in the list.')
    } else {
      let currentNode = this.head
      let previousNode = null
      while (currentNode.next != null) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = null
      this.length--
    }
  }

  contains(input) {
    if (this.head === null) {
      console.log('There is not any element in the list.')
    } else {
      let currentNode = this.head
      for (let i = 0; currentNode != null; i++) {
        if (currentNode.value === input) {
          return console.log(true)
        }
        currentNode = currentNode.next
      }
      return console.log(null)
    }
  }

  find(input) {
    if (this.head === null) {
      console.log('There is not any element in the list.')
    } else {
      let currentNode = this.head
      for (let i = 1; currentNode != null; i++) {
        if (currentNode.value === input) {
          return console.log(i)
        }
        currentNode = currentNode.next
      }
      return console.log(null)
    }
  }

  toString() {
    if (this.head === null) {
      console.log('There is not any element in the list.')
    } else {
      let currentNode = this.head
      let list = ''
      for (let i = 1; currentNode != null; i++) {
        list += `( ${currentNode.value} ) -> `
        currentNode = currentNode.next
      }
      console.log(list + ` ${currentNode}`)
    }
  }

  insertAt(input, index) {
    if (this.head === null) {
      console.log('There is not any element in the list.')
    } else {
      let currentNode = this.head
      let newNode = null
      let previousNode = null
      for (let i = 1; currentNode != null; i++) {
        if (i === 1 && index === 1) {
          this.head = new Node(input, this.head)
          this.length++
        } else if (i === index) {
          previousNode.next = new Node(input)
          newNode = previousNode.next
          newNode.next = currentNode
          this.length++
        } else {
          previousNode = currentNode
          currentNode = currentNode.next
        }
      }
    }
  }

  removeAt(index) {
    if (this.head === null) {
      console.log('There is not any element in the list.')
    } else {
      let currentNode = this.head
      let previousNode = null
      for (let i = 1; currentNode != null; i++) {
        if (i === 1 && index === 1) {
          this.head = null
          this.head = currentNode.next
          this.length--
        } else if (i === index) {
          previousNode.next = null
          previousNode.next = currentNode.next
          this.length--
        } else {
          previousNode = currentNode
          currentNode = currentNode.next
        }
      }
    }
  }
}

const list = new LinkedList()

list.prepend('Krunoslav', null)
list.prepend('Bruno', null)
list.prepend('Lovro', null)
list.append('Dijana', null)
// list.firstItem()
// list.tail()
// list.size()
// list.at(3)
// list.pop()
// list.size()
// list.contains('')
// list.find('Lovro')
list.insertAt('Mama', 3)
list.insertAt('Tata', 4)
list.insertAt('Papa', 1)
list.toString()
list.removeAt(5)
list.toString()
list.size()
console.log(list)
