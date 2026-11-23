import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-users-grid',
  imports: [AgGridAngular],
  templateUrl: './users-grid.html',
  styleUrl: './users-grid.css',
})
export class UsersGrid {
    defaultColDef: ColDef = {
    filter: true,
    flex: 1,
    sortable: true,
    floatingFilter: true,
  };
  columnDefs: ColDef[] = [
    { field: 'id' },
    { field: 'name' },
    { field: 'city' },
  ];

  rowData = [
    { id: 1, name: 'Ali', city: 'Islamabad' },
    { id: 2, name: 'Sara', city: 'Lahore' },
    { id: 3, name: 'Ahmed', city: 'Karachi' },
  ];

}