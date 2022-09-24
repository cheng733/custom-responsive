# custom-responsive

> 描述

```
新增对象,数组和字符串的传参形式保留react-responsive的传参形式，满足日常的开发需求；
后续功能。。。。。
```

> 安装

```
       npm i custom-responsive
       yarn add custom-responsive
```

> 使用

```
  @params
       传入、字符串以及数组
       1.@expamle 对象
              { small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)"}
       2.@expamle 数组
              [,200] or
              [200,] or
              [200,400]
        
              数组,第三个参数:0为高度，1为宽度,可以不传默认为宽度,目前只兼容常用的方式
              @example:
              [,1200,0]
       3.@expamle 字符串
              "min-width:1224px" or
              "max-width:1224px"
       4.保留react-responsive的参数传递形式
       
       @returns
       布尔值或者对象
              1.@expamle
              true/false
              2.@expamle
              {small:false,medium:true,large:false}
```

