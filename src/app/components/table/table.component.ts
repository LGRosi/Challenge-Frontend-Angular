import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserData } from 'src/app/interfaces/user.interface';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  userList: UserData[] = [];

  id: number = 0;

  displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
  dataSource = new MatTableDataSource<UserData>(this.userList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.search();
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  search() {
    this._dataService.searchData( this.id )
        .subscribe( user => {
          console.log(user);
          this.dataSource.data = user as UserData[];
        });
  }

}





// import { AfterViewInit ,Component, ViewChild } from '@angular/core';
// import { DataService } from '../../services/data.service';
// import { UserData } from '../../interfaces/user.interface';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';


// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })

// export class TableComponent {

//   userList: UserData[] = [
//     {id: 1, userId: 1, title: 'Hola', body: 'Mundo'},
//     {id: 2, userId: 2, title: 'Hola', body: 'Mundo'},
//     {id: 3, userId: 3, title: 'Hola', body: 'Mundo'},
//     {id: 4, userId: 4, title: 'Hola', body: 'Mundo'},
//   ];

//   displayedColumns: string[] = ['id', 'userId', 'title', 'body'];
//   dataSource = new MatTableDataSource(this.userList);

//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   id: number = 1;

//   constructor(private _dataService: DataService) { }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }

//   search() {
//     console.log(this.id);

//     this._dataService.searchData( this.id )
//       .subscribe( user => {
//         console.log(user);
//       });
//   }

// }
