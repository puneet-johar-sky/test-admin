import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    NumberField,
    DateInput,
    ImageField
} from 'react-admin';

import SLEShow from './SLEShow';

const listFilters = [
    <DateInput source="date_gte" alwaysOn />,
    <DateInput source="date_lte" alwaysOn />,
];

const SLEList = () => (
    <List
        filters={listFilters}
        perPage={25}
        sort={{ field: 'date', order: 'DESC' }}
    >
        <Datagrid
            rowClick="expand"
            expand={<SLEShow />}
            sx={{
                '& .column-customer_id': {
                    display: { xs: 'none', md: 'table-cell' },
                },
                '& .column-total_ex_taxes': {
                    display: { xs: 'none', md: 'table-cell' },
                },
                '& .column-delivery_fees': {
                    display: { xs: 'none', md: 'table-cell' },
                },
                '& .column-taxes': {
                    display: { xs: 'none', md: 'table-cell' },
                },
            }}
        >
            <TextField source="pid" />
            <TextField source='title'/>
            <DateField source="displayStartDate" />
            <ImageField source='images' src='url'/>
        </Datagrid>
    </List>
);

export default SLEList;
