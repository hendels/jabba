import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BusinessDateService} from '@me/services';
import {map, shareReplay, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
    selector   : 'me-otc-date-picker',
    templateUrl: './otc.date.picker.component.html',
    styleUrls  : ['./otc.date.picker.component.scss']
})
export class OtcDatePickerComponent implements OnInit {
    @Input()
    public recalculate: any;
    @Output()
    public readonly selectedBusinessDate: EventEmitter<any> = new EventEmitter();
    // TODO correct selecteddate / dates type
    private selectedDate: any;
    private availableDates: Observable<any[]>;
    private availableTimestamps: Observable<any[]>;

    public constructor(private readonly businessDateService: BusinessDateService,
        private readonly changeDetector: ChangeDetectorRef) {  // <<< DETECTOR
        this.selectedDate = this.businessDateService.selectedBusinessDate;
    }

    public ngOnInit() {
        this.availableDates = this.businessDateService.snapshots.pipe(
            map((data) => this.removeDuplicates(data.snapshots)),
        );
        snapshots.subscribe(
        (data) => {
            this.availableDates = this.removeDuplicates(data.snapshots);
            this.changeDetector.markForCheck(); // <<< WHILE SUBSCRIBE DETECOTR RERENDER THIS COMPONENT
        }
        );
    }

    public changeBusinessDate(event: any): any {
        const selectedDate = event;
        this.selectedBusinessDate.emit(selectedDate);
        this.businessDateService.selectedBusinessDate = selectedDate;
    }

    private removeDuplicates(snapshots: any) {
        const uniqueDates: any = {};
        snapshots.map((snapshot: any, index: number) => {
            if (!(snapshot.business_date in uniqueDates)) {
                uniqueDates[snapshot.business_date] = true;
            }
        });
        return Object.keys(uniqueDates).reduce((onlyDates, date) => {
            onlyDates.push(date);
            return onlyDates;
        }, []);
    }
}
