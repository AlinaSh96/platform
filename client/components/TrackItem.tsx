import react from 'react';
import Navbar from './Navbar';
import { Box, Container, Grid } from '@mui/material';
import { ITrack } from '../types/track';
//import {Container} from "@material-ui/core";

interface TrackItemProps {
    track: ITrack;
    active?: boolean; 
}
 
const TrackItem : React.FC<TrackItemProps> = ({track, active = false}) => {
 return (
     <div>
         {track.name}
     </div>
 )
}

export default TrackItem