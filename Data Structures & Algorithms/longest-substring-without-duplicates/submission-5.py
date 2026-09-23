class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_index_map = {}
        left =0 
        max_Count=0
        for right in range(len(s)):
            char = s[right]
            
           
            if char in char_index_map and char_index_map[char] >= left:
                # Snap the left pointer to the right of the duplicate
                left = char_index_map[char] + 1
            
            # Update the dictionary with the character's most recent index
            char_index_map[char] = right
            
            # Calculate the size of the current valid window
            max_Count = max(max_Count, right - left + 1)
            
        return max_Count
        