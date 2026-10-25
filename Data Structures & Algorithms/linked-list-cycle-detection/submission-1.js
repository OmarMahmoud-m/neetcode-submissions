/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const set = new Set();
        let currentNode = head;
        while(currentNode){
            if(!set.has(currentNode)){
                set.add(currentNode);
                currentNode = currentNode.next
            }
            else{
                return true;
            }
        }
        return false;
    }
}
