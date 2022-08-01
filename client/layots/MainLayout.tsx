import react from 'react';
import Navbar from '../components/Navbar';
import { Container } from '../node_modules/@mui/material/index';
//import {Container} from "@material-ui/core";
interface MainLayoutProps {
    children: React.ReactNode; 
}

const MainLayout : React.FC<MainLayoutProps> = ( { children }) => {
 return (
<>
<Navbar/>
<Container style={{margin: '90px 0'}}>
{children}
</Container>
</>
 )
}

export default MainLayout