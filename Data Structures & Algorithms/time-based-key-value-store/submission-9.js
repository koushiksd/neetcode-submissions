class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let data= {
            key,value,timestamp
        }
        let keyDataIfPresent  = this.keyStore.has(key)?this.keyStore.get(key):[]
        if(keyDataIfPresent){
            let findKey = keyDataIfPresent.findIndex((a)=>a.timestamp==timestamp)
            if(findKey!=-1){
                keyDataIfPresent[findKey]=data
            }else{
                keyDataIfPresent.push(data)
            }
            this.keyStore.set(key,keyDataIfPresent)
        }else{
            this.keyStore.set(key,data)
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let data = this.keyStore.has(key)?this.keyStore.get(key):null
        if(!data||data.length==0) return ""
        let findIndex = data.findIndex((a)=>{
           return a.timestamp==timestamp
        })
        
        if(findIndex!=-1){
            return data[findIndex].value
        }else{
            let dataLower = data.length>1?data.filter(a=>a.timestamp<=timestamp):data
          
            return dataLower.length>0 && dataLower[dataLower.length-1].timestamp<=timestamp?dataLower[dataLower.length-1].value:""
        }
    }
}
