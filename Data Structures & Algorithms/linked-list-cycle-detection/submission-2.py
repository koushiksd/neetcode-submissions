# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        if not head:
            return False
        curr = head
        regester = set()
        
        while curr:
            if curr in regester:
                return True
            regester.add(curr)
            curr = curr.next
        return False
        

        