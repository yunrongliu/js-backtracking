* ## 此片文章描述硬件加速

* 普通文档流

> 普通文档流是全局的一个主图层，是一个复杂图层
  可以使用float absolute fixed 来脱离普通文档流（但其实是摆脱文档流的规则），实际上还是属于普通文档流的
  使用上述方式的图层触发了重绘或者回流，都会引起整个文档流的重绘于回流

  可以使用其他方式生成复杂图层，这样就会和主图层区别开，比如说一个动画，是存在大量的回流的，如果把动画放在主图层可能会对用户不友好
  其实就是常说的硬件加速

* 硬件加速
    条件：
      1.translate3d、translateZ  
      2.opacity属性/过渡动画
      3.will-chang: transform