const node1 = {
    value: 34,
    next: node2,
};

const node2 = {
    value: 12,
    next: node3,
};

const node3 = {
    value: 4,
    next: null,
};

class LinkedListNode {
    constructor(value) {
    this.value = value;
    this.next = null;
    }

    add(node) {
    if (!this.next) this.next = node;
    else {
        this.next.add(node);
    }
}
    getList(){
        if(!this.next) return this.value;
        return`${this.value} ${this.next.getList()}`;
    }
    
    remove(value){        
        if(!this.next) return;
        if(this.next.value === value){
            this.next = this.next.next;
        } else {
            this.next.remove(value);
        }
    }
}

test('linked list adds', () => {
    const root = new LinkedListNode('A');
    const nodeB = new LinkedListNode('B');
    const nodeC = new LinkedListNode('C');
    const nodeD = new LinkedListNode('D');
    root.add(nodeB);
    root.add(nodeC);
    root.add(nodeD);

    expect(root.next).toBe(nodeB);
    expect(nodeB.next).toBe(nodeC);
    expect(nodeC.next).toBe(nodeD);
    expect(nodeD.next).toBe(null);
});
test.skip('linked list getList', () => {
    const root = new LinkedListNode('A');
    const nodeB = new LinkedListNode('B');
    const nodeC = new LinkedListNode('C');
    const nodeD = new LinkedListNode('D');

    expect(root.getList()).toBe('A');
    expect(nodeB.getList()).toBe('A B');
    expect(nodeC.getList()).toBe('A B C');
    expect(nodeD.getList()).toBe('A B C D');
});

// test('linked list removes', () => {
//     const root = new LinkedListNode('A');
//     const nodeB = new LinkedListNode('B');
//     const nodeC = new LinkedListNode('C');
//     const nodeD = new LinkedListNode('D');
//     root.remove(nodeB);
//     root.remove(nodeC);
//     root.remove(nodeD);
//     expect(root.next).toBe(nodeA);
// })
