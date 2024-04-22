import { IColumns, IColumnsFromServer } from '@/interfaces/columns.interface';

export interface ITableState {
 applications: IColumnsFromServer[] | [];
 filteredApplications: IColumnsFromServer[] | [];
}
