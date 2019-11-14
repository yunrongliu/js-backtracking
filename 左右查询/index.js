{
  /**
   * 变量的查询操作分为左查询和右查询，
   * 左右查询发生 仅变量
   * 借着声明赋值操作一起理解
   * 有代码 var a = 1
   * 将此代码拆分为 声明 和 赋值 俩个操作
   * 声明操作：仅是向作用域确认是否有a存在于当前作用域中
   * 赋值操作：在作用域链中查询是否有a，有就赋值，如果一直到全局作用域中也没有，则在全局作用域中添加a，然后赋值
   * 
   */
  //有如下代码
  function test(){
    var a = b = 1  //声明赋值操作从右往左 首先是 b = 1  test环境内没有b，全局里也没有b，所以会创建b属性，将它的值设置为1 
                   //然后是var a = b 先解析声明 当前test环境没有a，在此环境中添加a属性，并将a的值设置为b，会再去查找一次b，b再全局作用域里，值为1
                   //所以可以把左查询理解为设置（set）既然是设置，那么我必须要有设置目标   右查询可以理解为获取（get） ，我仅仅只是想拿到值
  }
  test() //这里也是一个右查询
  console.log(a) //error: a is not defined 这里也是一个右查询
  console.log(b) //1 这里也是一个右查询

  /**
   * 总结：
   *   理解了左右查询对js运行时作用域，作用域链，以及getter setter 的理解也会更容易
   */

  
}