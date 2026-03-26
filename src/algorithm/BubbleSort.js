export function bubbleSort(array){
    let animation = []
    let tempArr = [...array]
    for (let i = 0; i < tempArr.length; i++) {
        for (let j = 0; j < tempArr.length-1; j++) {
            if(tempArr[j]>tempArr[j+1]){
                animation.push([j,j+1,true])
                let temp=tempArr[j];
                tempArr[j]= tempArr[j+1]
                tempArr[j+1]=temp
            }
            else{
                animation.push([j,j+1,false])
            }
            
        }
        
        
    }
    console.log(tempArr)
    return animation;
}
