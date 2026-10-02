class Solution {

    carFleet(target, position, speed) {
        let cars = [];
        for(let i = 0;i < speed.length;i++){
            cars[i] = [position[i], speed[i]];
        }
        cars.sort((a, b) => b[0] - a[0]);
        let fleets = 1;
        let prevTime = (target - cars[0][0]) / cars[0][1];
        for(let i = 1;i < cars.length;i++){
            let currTime = (target - cars[i][0]) / cars[i][1];
            if(currTime > prevTime){
                fleets++;
                prevTime = currTime;
            }
            
        }
        return fleets;

    }
}
