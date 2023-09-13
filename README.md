# Linked Lists

**Project: Linked Lists** from The Odin Project's [curriculum](https://www.theodinproject.com/lessons/javascript-linked-lists) using JavaScript classes.

```javascript
// Data structure of a singly-linked-list:
// [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

// JavaScript implementation
{
    value: "NODE(head)",
    nextNode: {
        value: "NODE",
        nextNode: {
            value: "NODE(tail)",
            nextNode: null
        }
    }
}
```

## 📃 Class methods

Here is a list of _methods_ available in the `LinkedList` class.

1. `append(value)` adds a new node containing value to the end of the list
2. `prepend(value)` adds a new node containing value to the start of the list
3. `size` returns the total number of nodes in the list
4. `head` returns the first node in the list
5. `tail` returns the last node in the list
6. `at(index)` returns the node at the given index
7. `pop` removes the last element from the list
8. `contains(value)` returns `true` if the passed in value is in the list and otherwise returns `false`.
9. `find(value)` returns the index of the node containing value, or `null` if not found.
10. `toString` returns a string representation of the full list.
11. `insertAt(value, index)` inserts a new node with the provided value at the given index.
12. `removeAt(index)` removes the node at the given index.
_[<p style="font-size: small; text-align: right">Derived from The Odin Project</p>](https://www.theodinproject.com/lessons/javascript-linked-lists)_

## 📚 Lessons learnt

- Data structures.
- Linked lists

## 🛠 Tools & technologies

- NodeJS & Nodemon with NPM.
- JavaScript Debug Terminal.
