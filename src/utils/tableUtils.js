import tables from '../../utils/tables.json'

export function getAllTables() {
    return tables;
}

export function getTableById(id){
    return tables.filter(table => table.key === id);
}