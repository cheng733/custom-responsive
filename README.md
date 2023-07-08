# custom-responsive

> 描述

```
该hook新增对象,数组和字符串的传参形式,保留原本react-responsive的传参，满足日常的开发需求；
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
              useMedia({ small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)"})
              
       2.@expamle 数组
              1. useMedia([,200])
              2. useMedia([200,])
              3. useMedia([200,400]) 
        
              数组中第三个参数:0为高度，1为宽度,默认为宽度,目前只兼容常用的方式
              @example:
              useMedia([,1200,0])
       3.@expamle 字符串
              1. useMedia("min-width:1224px")
              2. useMedia("max-width:1224px")       
       4.保留react-responsive的参数传递形式
              useMedia({query: '(min-width: 1224px)'})
              useMediaQuery({ minWidth: 1224 })
              useMediaQuery({ orientation: 'portrait' })
              useMediaQuery({ minResolution: '2dppx' })
       @returns
       布尔值或者对象
              1.@expamle

              const media = useMedia("max-width:1224px")
              media为true/false

              2.@expamle
              
              const media = useMedia({ small: "(max-width: 599px)",
              medium: "(min-width: 600px) and (max-width: 1199px)",
              large: "(min-width: 1200px)"})
              result：
              media = {small:false,medium:true,large:false}
```