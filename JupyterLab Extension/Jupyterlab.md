## Jupyterlab   
* Jupyterlab 은 부가적인 기능들의 경우 Extension 설치 및 프론트 명령어로 기능을 추가한다.

* ![leftSide.png](leftSide.png)   
  기본적인 Jupyterlab 에서 왼쪽의 경우,    
  `labshell.add(추가 할 위젯, '위치')`    
  `labshell`은 `@jupyterlab/application`에서 ILabShell 이다. 
     * 위젯의 경우 type 이 widget 이다.
    
    
* main-menu의 경우 addItem, 혹은 addGroup 으로 추가하며 기본적으로 다른 메뉴 이외의 추가의 경우에도 같지만   
`rank: number` 를 통해 추가 위치를 조정 가능하다.

* Notebook 파일 자체에 toolbar 이외에    
  cell-toolbar 또한 
`app.docRegistry`에서 `addWidgetExtension`을 통해 노트북 내에서의 커스텀이 가능하다.
