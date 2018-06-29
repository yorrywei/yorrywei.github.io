---
layout: post
title: 破解数独 (微信小程序)
description: "前几天整理以前的代码，发现7年前写了个Android app是破解数独的。想来自己也写了不少微信小程序了，却还没以个人名义正式发布过，干脆从它开始，量产个人小程序，顺便丰富下业余生活。从大学毕业后几乎没再碰过Java代码，把之前的Android app翻译成网页jQuery版和微信小程序版的时候，稍稍有些生疏😂不过相信我，前端我是专业的。。。"
tags: [作品]
categories: [Prod]
sid: miniprogram-kosudoku
---

### 小程序码
![Smithsonian Image](/images/app_code_KOsudoku.jpg)
{: .image-contain}

前几天整理以前的代码，发现7年前写了个Android app是破解数独的。想来自己也写了不少微信小程序了，却还没以个人名义正式发布过，干脆从它开始，量产个人小程序，顺便丰富下业余生活。

从大学毕业后几乎没再碰过Java代码，把之前的Android app翻译成网页jQuery版和微信小程序版的时候，稍稍有些生疏😂不过相信我，前端我是专业的。。。

<!--more-->

---

### 网页体验版
{::nomarkdown}
<div class="sudoku-demo">
<table cellspacing="1" class="mainTable">
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
<div class="action-area">
  <table cellspacing="0" class="panel">
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td rowspan="3" class="clean">清<br/>除</td>
    </tr>
    <tr>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
  </table>
  <div class="sudoku-btns">
    <button class="calc">计算</button>
    <button class="reset">重置</button>
  </div>
</div>
</div>
<script src="/assets/js/vendor/jquery-1.9.1.min.js"></script>
<script>
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('$(s(){c 1m=1l;$(\'1d\').J(s(e){$(\'.Y\').M(\'17\');$(\'.K p\').M(\'R\').M(\'V\')});$(\'.K p\').J(s(e){$(\'.Y\').Z(\'17\');$(\'p\').M(\'R\').M(\'V\');$(Q).Z(\'R\');$(Q).1t(\'1u\').1p(\'p\').Z(\'V\');$(\'.K p:1q-1r(\'+($(Q).1y.1v+1)+\')\').Z(\'V\');e.1w()});$(\'.Y p\').J(s(e){6($(\'.Y\').1k(\'17\')){6($(Q).1k(\'1s\')){$(\'p.R\').N(\'\').1h(\'14-B\')}q{c B=$(Q).N();$(\'p.R\').N(B).1e(\'14-B\',B)}}});$(\'.1A\').J(s(e){$(\'1d\').1x(\'J\');$(\'.K p\').1h(\'14-B\').N(\'\')});$(\'.1z\').J(s(e){c d=\'\';$.1f($(\'.K p\'),s(i,v){d+=$(v).1e(\'14-B\')||\'0\'});c w=1g(d);6(w==\'1c\'){1o(\'1B\')}q 6(w==\'1j\'){1o(\'1J\')}q{$.1f($(\'.K p\'),s(i,v){$(v).N(w.1K(i))})}});s 1g(1i){c g=[];c d=1i;d=U("1I"+d);g.X(d);c n=d.m(0,1);c y="";c I="";c l=0;13("1"==n||"2"==n){g.X(d);l=g.h-1;6("1"==n){d=U(d)}q 6("2"==n){g.S(l,1);l=g.h-1;6(l==0){n="7";1E;}y=g[l].m(4,12)+"0";d=g[l].m(0,3)+y+g[l].m(12);g.S(l,1);g.X(d);l=g.h-1;I=y.m(0,1);13("0"==I){g.S(l,1);l=g.h-1;y=g[l].m(4,12)+"0";d=g[l].m(0,3)+y+g[l].m(12);g.S(l,1);g.X(d);l=g.h-1;I=y.m(0,1)}d=U(d)}n=d.m(0,1)}6(n=="9")w=d.m(12);6(n=="8")w="1c";6(n=="7")w="1j";u w}s U(L){c d=L.m(12),F="",G="";c r=[];c 11=0;c n=L.m(0,1);c A=L.m(1,2)-0;c H=L.m(2,3)-0;c I=L.m(3,4)-0;c C=1,h,t,19=0,x=0;c 18=1l;c a,b,i,j,k,o,E,D,W,15;6(d.h!=1F)u("8");q{c z=P O();5(c i=0;i<9;i++){z[i]=P O();5(c j=0;j<9;j++){z[i][j]=d.m(i*9+j,i*9+j+1)-0}}6(n=="1"&&A!=9){z[A][H]=I}c f=P O();5(c i=0;i<9;i++){f[i]=P O();5(c j=0;j<9;j++){f[i][j]=P O();5(c k=0;k<9;k++){f[i][j][k]=k+1}}}13(C!=0){W=0;15=0;t=0;5(i=0;i<9;i++)5(j=0;j<9;j++)6(z[i][j]!=0)W++;5(i=0;i<9;i++)5(j=0;j<9;j++){6(z[i][j]!=0){o=z[i][j]-1;E=1a.1n(i/3);D=1a.1n(j/3);5(k=0;k<9;k++)6(k!=j)6(z[i][k]==z[i][j]){x=1;C=0}5(k=0;k<9;k++)6(k!=i)6(z[k][j]==z[i][j]){x=1;C=0}5(a=3*E;a<3*E+3;a++)5(b=3*D;b<3*D+3;b++)6(a!=i&&b!=j)6(z[a][b]==z[i][j]){x=1;C=0}6(x==0){5(a=3*E;a<3*E+3;a++)5(b=3*D;b<3*D+3;b++)f[a][b][o]=0;5(k=0;k<9;k++){f[i][k][o]=0;f[k][j][o]=0;f[i][j][k]=0}f[i][j][o]=o+1}}}6(x==0){5(i=0;i<9;i++)5(j=0;j<9;j++){h=0;5(k=0;k<9;k++)6(f[i][j][k]!=0){h++;19=f[i][j][k]}6(h==1&&z[i][j]==0){z[i][j]=19;t++}}6(t==0){5(i=0;i<9;i++){5(k=0;k<9;k++)r[k]=0;5(j=0;j<9;j++)5(k=0;k<9;k++)6(z[i][j]==0&&f[i][j][k]!=0)r[k]++;5(k=0;k<9;k++)6(r[k]==1)5(a=0;a<9;a++)6(f[i][a][k]!=0){z[i][a]=k+1;t++}}}6(t==0){5(j=0;j<9;j++){5(k=0;k<9;k++)r[k]=0;5(i=0;i<9;i++)5(k=0;k<9;k++)6(z[i][j]==0&&f[i][j][k]!=0)r[k]++;5(k=0;k<9;k++)6(r[k]==1)5(a=0;a<9;a++)6(f[a][j][k]!=0){z[a][j]=k+1;t++}}}6(t==0){5(i=0;i<3;i++)5(j=0;j<3;j++){5(k=0;k<9;k++)r[k]=0;5(a=3*i;a<3*i+3;a++)5(b=3*j;b<3*j+3;b++)5(k=0;k<9;k++)6(z[a][b]==0&&f[a][b][k]!=0)r[k]++;5(k=0;k<9;k++)6(r[k]==1)5(a=3*i;a<3*i+3;a++)5(b=3*j;b<3*j+3;b++)6(f[a][b][k]!=0){z[a][b]=k+1;t++}}}5(i=0;i<9;i++)5(j=0;j<9;j++)6(z[i][j]!=0)15++;6(15>W)C=1;q C=0}}5(i=0;i<9;i++)5(j=0;j<9;j++){11=0;5(k=0;k<9;k++)6(f[i][j][k]!=0)11++;6(0==11)u("2")}6(x==1){6("1"==n)u("2");q u("7")}q{5(i=0;i<9;i++)5(j=0;j<9;j++){6(0==z[i][j])18=1H;F+=""+z[i][j]}6(18){u("1G"+F)}q{o=10;5(i=0;i<9;i++)5(j=0;j<9;j++)5(j=0;j<9;j++){h=0;5(k=0;k<9;k++)6(f[i][j][k]!=0)h++;6(h>1&&h<o){o=h;A=i;H=j}}6(10==o)u("7");q{6(1m){c T=[];c 1b=1;5(k=0;k<9;k++)6(f[A][H][k]!=0){T.S(1C(1a.1D()*1b),0,k+1);1b=T.h}5(c 16=0;16<T.h;16++){G+=T[16]}}q{5(k=0;k<9;k++)6(f[A][H][k]!=0)G+=k+1}13(G.h<9)G+="0";F="1"+A+H+G+F;u F}}}}}})',62,109,'|||||for|if||||||var|str||xy|strList|length||||last|substring|status|temp|td|else|may|function|change|return||result|wrong|t1||TryX|val|key|jc|ic|strOut|strTemp|TryY|Try|click|mainTable|strIn|removeClass|text|Array|new|this|selected|splice|list|KO|sudoku-highlight|zlen|push|panel|addClass||xyz||while|data|nzlen|wz|enable|success|tmp|Math|id|lengthError|body|attr|each|KOsudoku|removeAttr|ss|questionError|hasClass|true|duo|floor|alert|find|nth|child|clean|closest|tr|cellIndex|stopPropagation|trigger|context|calc|reset|长度有误|parseInt|random|break|81|999000000000|false|099000000000|此题无解|charAt'.split('|'),0,{}))
</script>
<style>
.sudoku-demo table{
  width: inherit;
}
.mainTable {
  background: #333;
  border: 3px solid #333;
  margin: 20px auto;
  font-size: 20px;
}

.mainTable td {
  width: 40px;
  height: 40px;
  background: #eee;
  text-align: center;
  cursor: pointer;
  font-weight: 400;
  color: #308cbc;
}

.mainTable td.sudoku-highlight {
  background: #ddf0f7;
}

.mainTable td.selected {
  background: #9edff7;
}

.mainTable td[data-val] {
  font-weight: bold;
  color: #000;
}

.mainTable tr:nth-child(3) td,
.mainTable tr:nth-child(6) td {
  border-bottom: 3px solid #333;
}

.mainTable td:nth-child(3),
.mainTable td:nth-child(6) {
  border-right: 3px solid #333;
}

.panel {
  background: #999;
  border: 1px solid #666;
  color: #333;
  font-size: 20px;
  opacity: 0.3;
  margin-right: 20px;
}

.panel.enable {
  opacity: 1;
}

.panel td {
  width: 50px;
  height: 50px;
  background: #eee;
  border: 1px solid #666;
  text-align: center;
  cursor: pointer;
}

.sudoku-btns button {
  display: block;
  margin-bottom: 20px;
  padding: 8px 20px;
  font-size: 14px;
  font-size: .875rem;
  background-color: #222;
  color: #fff;
  border-width: 2px !important;
  border-style: solid !important;
  border-color: #222;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background-color: #308cbc;
  color: #eee;
  border-color: #308cbc;
  margin: 0 auto;
}

.action-area {
  display: flex;
  justify-content: center;
}

.action-area .sudoku-btns {
  display: flex;
  flex-direction: column;
}

.action-area .sudoku-btns .calc {
  flex: 1;
  margin-bottom: 20px;
}
.action-area .sudoku-btns .reset {
  color: #308cbc;
  background: #eee;
}
</style>
{:/nomarkdown}

---

### Android版传送门

[KOsudoku(Android解数独app)](/prod/kosudoku/)