/**
 * Created by Administrator on 2018/6/30 0016.
 */
export function distinct(arr) {
    var result = [],
    i,
    j,
    len = arr.length;
    for(i = 0; i < len; i++){
      for(j = i + 1; j < len; j++){
        if(arr[i] === arr[j]){
          j = ++i;
        }
      }
      result.push(arr[i]);
    }
  return result;
}
