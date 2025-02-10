let linkedList = [];

// Helper Function to Render Linked List
function renderList() {
    const linkedListDiv = document.getElementById('linkedList');
    linkedListDiv.innerHTML = ''; // Clear previous list

    linkedList.forEach((value, index) => {
        const nodeDiv = document.createElement('div');
        nodeDiv.className = 'node';
        nodeDiv.innerText = value;

        linkedListDiv.appendChild(nodeDiv);

        if (index < linkedList.length - 1) {
            const arrowDiv = document.createElement('div');
            arrowDiv.className = 'node-arrow';
            linkedListDiv.appendChild(arrowDiv);
        }
    });
}

// Functions for Linked List Operations
function createLinkedList() {
    linkedList = [];
    const value = document.getElementById('nodeValue').value;
    if (value !== '') {
        linkedList.push(value);
        renderList();
    }
}

function addNodeStart() {
    const value = document.getElementById('nodeValue').value;
    if (value !== '') {
        linkedList.unshift(value);
        renderList();
    }
}

function addNodeEnd() {
    const value = document.getElementById('nodeValue').value;
    if (value !== '') {
        linkedList.push(value);
        renderList();
    }
}

function addNodeBetween() {
    const value = document.getElementById('nodeValue').value;
    const position = parseInt(prompt('Enter position (0-based index):'), 10);
    if (value !== '' && position >= 0 && position <= linkedList.length) {
        linkedList.splice(position, 0, value);
        renderList();
    }
}

function deleteNodeStart() {
    linkedList.shift();
    renderList();
}

function deleteNodeEnd() {
    linkedList.pop();
    renderList();
}

function deleteNodeBetween() {
    const position = parseInt(prompt('Enter position (0-based index):'), 10);
    if (position >= 0 && position < linkedList.length) {
        linkedList.splice(position, 1);
        renderList();
    }
}

function reverseList() {
    linkedList.reverse();
    renderList();
}
