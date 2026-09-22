class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        left = 1
        right = max(piles)
        while left<right:
            mid = (left+right) //2
            total_hours = sum(math.ceil(pile / mid) for pile in piles)
            total_hours_2 = 0
            for banana in piles:
                total_hours_2+=math.ceil(banana/mid)
            print(total_hours==total_hours_2)
            if total_hours<=h:
                right = mid
            else:
                left= mid+1

        return left
        