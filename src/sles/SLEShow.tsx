import * as React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { ReferenceField, TextField, useRecordContext } from 'react-admin';


const SLEShow = () => {
    const record = useRecordContext();
    if (!record) return null;
    return (
        <Card sx={{ width: 600, margin: 'auto' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom>
                            {record.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom align="right">
                            PID: {record.pid}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} container alignContent="flex-end">
                       
                    </Grid>
                </Grid>
                <Box height={20}>&nbsp;</Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6" gutterBottom align="center">
                            Date{' '}
                        </Typography>
                        <Typography gutterBottom align="center">
                            {new Date(record.displayStartDate).toLocaleDateString()}
                        </Typography>
                    </Grid>

                    <Grid item xs={5}>
                        <Typography variant="h6" gutterBottom align="center">
                            {record.description}
                        </Typography>
                        
                    </Grid>
                </Grid>
                
            </CardContent>
        </Card>
    );
};

export default SLEShow;
