### Event emiter

serverCreated works as event, should be emmited from 

#### component for Event Receiver 
```angular2html
<div class="container">
    <app-cockpit 
        (serverCreated)="onServerAdded($event)"
        (bluePrintCreated)="onBluePrintAdded($event)"
    ></app-cockpit>
    <hr>
    <app-server-element
        *ngFor="let serverElement of serverElements"
    ></app-server-element>
</div>
```

```js
export class SomeClass {
    onServerAdded(serverData: {serverName: string, serverContent: string}) {
        // $event = serverData
    }   
}
    

```
#### component for Event Emmiter 



```angular2html



```

```js

export class CockpitComponent implements OnInit {}
    @Output() serverCreated = new EventEmmiter<{{serverName: string, serverContent: string}}>();
    @Output() bluePrintCreated = new EventEmmiter<{{serverName: string, serverContent: string}}>();
    newServerName = '';
    newServerContent = '';
    constructor() {}

    onAddServer() {
        this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    }
    onAddBlueprint() {
        this.bluePrintCreated.emit();
    }
    






```
