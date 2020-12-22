import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiHttpService} from '../../services/api-http.service';
import {interval, Subject} from 'rxjs';
import {startWith, switchMap, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-device-connection-check',
    templateUrl: './device-connection-check.component.html',
    styleUrls: ['./device-connection-check.component.scss']
})
export class DeviceConnectionCheckComponent {
    devicesList = null;
    selectedOptions = [];
    selectedOption;
    runTestsFor;

    constructor(private httpClient: ApiHttpService) {}

    onCheckDevices() {
        if (this.devicesList !== null) { this.devicesList = null; } else {
            this.httpClient.getConnectedDevices().subscribe(res => this.devicesList = res.devices);
        }
    }

    onSendSelectedDevices() {
        this.runTestsFor = [];
        this.httpClient.postSelectedDevices(this.selectedOptions).subscribe();
    }

    onRunTests() {
        this.httpClient.getSelectedDevices().subscribe(res => this.runTestsFor = res.selectedDevices);
    }

    onDeviceSelection($event) {
        console.log($event);
        this.selectedOption = $event;

    }
}
