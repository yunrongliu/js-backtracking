{
  /**
   * 正则提供了转义的方式，也就是要把这些元字符、限定符或者关键字转义成普通的字符，
   * 做法很简答，就是在要转义的字符前面加个斜杠，也就是\即可。
   */

   // 要匹配以(ab)开头,一次或多次

   {
     let reg = /^\(ab\)+/
     let res = reg.test('(ab)')

     console.log(res)
   }

}