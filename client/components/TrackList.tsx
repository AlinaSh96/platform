import react from 'react';
import Navbar from './Navbar';
import { Box, Container, Grid } from '@mui/material';
import { ITrack } from '../types/track';
import TrackItem from './TrackItem';
//import {Container} from "@material-ui/core";
interface TrackListProps {
    tracks: ITrack[]; 
}

const TrackList : React.FC<TrackListProps> = ( { tracks }) => {
 return (
<Grid container direction='column'>
    <Box p={2}>
     {tracks.map( track => 
        <TrackItem
        key={track._id}
        track={track}
        />
        )}
    </Box>
</Grid>
 )
}

export default TrackList