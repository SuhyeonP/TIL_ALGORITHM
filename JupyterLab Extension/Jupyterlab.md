## Jupyterlab Custom   
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

* Notebook labShell 에서 sidebar 에 대한 toggle 이 가능한 명령어가 존재 `collapseLeft();`

* Notebook 에서 command 등록은 아래와 같이 할 수 있는데,
  ```javascript
  app.commands.addCommands('command name', {
    label: 'command 표시될 문구',
    caption: '??? 아직 모르겠음',
    excute: (args) => {
        // args 는 command excute 시 인자로 넣을수있다.
        // command 실행하면 실행되는 함수
    }
  })
  ```
  이렇게 command name 부분에서 보통 '카테고리:command' 설명 이런식으로 작성.
* Notebook 자체의 metadata 는 Map 으로 되어있다 cell의 경우 metadata.set으로 값을 수정및 제거 추가가 가능했지만,
Notebook의 metadata는 불가능하였다. 따라서 new Map으로 기존데이터로 생성후, set으로 값을 대입하였다.
  * 추후에 알게된건 
  ```javascript
  tracker.context.ready.then(()=>{
    tracker.model.metadata.set()
  })
  ```
  ready 를 이용하여 수정이 가능했다..!
* serverExtension 에서는 vuetify(필수 x )로 ui framework를 사용하여 vue 를 이용한 kernel 에서 화면을 보여줄수있다. 
