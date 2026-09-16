class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());
   
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let value = board[i][j]
                if (value == ".") continue
                let boardIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

                if (rows[i].has(value) || cols[j].has(value) || boxes[boardIndex].has(value)) return false
                rows[i].add(value);
                cols[j].add(value);
                boxes[boardIndex].add(value);
            }
        }

        return true
    }
}
