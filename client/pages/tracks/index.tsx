import { Grid, Card, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import react from 'react';
import TrackList from '../../components/TrackList';
import MainLayout from '../../layots/MainLayout';
import { ITrack } from '../../types/track';

const Index = () => {
    const router = useRouter();
    const tracks: ITrack[] = [
        {
            _id: '1', name: 'Alina', artist: 'alina', text: 'text', listens: 2, picture: '123', audio: '123',
             comments: [{
                _id: '1', username: 'Alina', text: 'alina',
            }]
        },
        {
            _id: '1', name: 'Alina', artist: 'alina', text: 'text', listens: 2, picture: '123', audio: '123',
             comments: [{
                _id: '1', username: 'Alina', text: 'alina',
            }]
        },
        {
            _id: '1', name: 'Alina', artist: 'alina', text: 'text', listens: 2, picture: '123', audio: '123',
             comments: [{
                _id: '1', username: 'Alina', text: 'alina',
            }]
        },
    ]
    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                    <Grid container justifyContent='space-between'>
                        <h1>Список треков</h1>
                        <Button onClick={()=>router.push('tracks/create')}>Загрузить</Button>
                    </Grid>
                    </Box>
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index