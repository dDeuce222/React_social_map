import React from "react";
import './App.css';
import Map from "./components/Map/Map";
import NavBar from "./components/NavBar/NavBar";
import CustomFooter from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import './index.css';
import PrivatePage from "./Pages/PrivatePage";
import ApiTest from "./Pages/ApiTest";
import ContactUs from "./Pages/ContactUs";
import AddPoint from "./Pages/AddPoint/AddPoint";
import ModeratorPanel from "./Pages/ModeratorPanel";
import {Box, useColorModeValue} from '@chakra-ui/react';


//Wczenisej bylo Route z Navbarem. Musialem to zmienic by footer ladnie sie kleil konca strony
function App() {
    return (
        <React.Fragment>
            <div className="BodyDiv">
                <NavBar />
                <Box className="MainContent" bgColor={useColorModeValue('gray.700', 'gray.800')}>
                    <Routes>
                        <Route path='/' element={<Map />} />
                        <Route path='/moderatorpanel' element={<ModeratorPanel/>} />
                        <Route path='/addpoint' element={<AddPoint />} />
                        <Route path='/about' />
                        <Route path='/contact' element={<ContactUs />} />
                        <Route path='/private' element={<PrivatePage />} />
                        <Route path='/apitest' element={<ApiTest />} />
                    </Routes>
                </Box>
                <CustomFooter className="Footer" />
            </div>
        </React.Fragment>
    );
}

export default App;
