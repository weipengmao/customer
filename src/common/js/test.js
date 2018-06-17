/**
 * Created by Administrator on 2018/6/16 0016.
 */
export function testRule(reg,name,testData) {
  if (name == '') {
    return testData = '请输入' + testData + ''
  } else if (name !== '') {
    if (reg.test(name)) {
      // 符合要求
    } else {
      // 不符合要求
      return testData = '' + testData + '格式不符合要求'
    }
  }
}
