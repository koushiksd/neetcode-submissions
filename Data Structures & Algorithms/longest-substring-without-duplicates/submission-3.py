class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        longest_count = []
        max_Count=0
        for char in s:
            if len(longest_count) == 0 : longest_count.append(char)
            else :
                if(char in longest_count):
                    longest_count=longest_count[longest_count.index(char)+1:]
                longest_count.append(char)
            max_Count=max(max_Count,len(longest_count))
            
        
        return max_Count
        