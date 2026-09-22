class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left = 1
        right = max(piles)
        while left<right:
            mid = (left+right) //2
            total_hours = 0
           
            for banana in piles:
                total_hours+=math.ceil(banana/mid)
            print(total_hours==total_hours)
            if total_hours<=h:
                right = mid
            else:
                left= mid+1

        return left
        