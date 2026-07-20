class Solution {
    groupAnagrams(strs) {
        const groups = {};
        for(let i = 0;i < strs.length;i++){
            const sortedStr = strs[i].split('').sort().join('');
            if(!groups[sortedStr]){
                groups[sortedStr] = []
            }
            groups[sortedStr].push(strs[i])
        }
        return Object.values(groups);
    }
}
