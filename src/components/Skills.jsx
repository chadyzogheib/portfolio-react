import '../style/Skills.css';

import React from 'react';
import { Box, Tabs, Tab, Typography } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Skills() {

  const [mainTab, setMainTab] = React.useState(0);

  const handleMainTabChange = (event, newValue) => {
    setMainTab(newValue);
  };

  const tools = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/201',
    'https://via.placeholder.com/202',
    'https://via.placeholder.com/203',
    'https://via.placeholder.com/204',
    'https://via.placeholder.com/205',
  ];

  const languages = [
    '/images/languages/java.svg',
    '/images/languages/javascript.svg',
    '/images/languages/dot-net.svg',
  ];

  const databases = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/201',
    'https://via.placeholder.com/202',
    'https://via.placeholder.com/203',
    'https://via.placeholder.com/204',
    'https://via.placeholder.com/205',
  ];

  const libraries = [
    '/images/libraries/react.svg',
  ];

  const others = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/201',
    'https://via.placeholder.com/202',
    'https://via.placeholder.com/203',
    'https://via.placeholder.com/204',
    'https://via.placeholder.com/205',
  ];

  return (
    <section id='skills' className='sections'>
      <div className="boxPanel">
        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }}
        >
          <Tabs
            className="tabsForm"
            value={mainTab}
            onChange={handleMainTabChange}
            variant="scrollable"
            orientation='vertical'
            scrollButtons="auto"
            aria-label="scrollable main tabs"
          >
            <Tab label="Tools" value={0} />
            <Tab label="Languages" value={1} />
            <Tab label="Databases" value={2} />
            <Tab label="Libraries" value={3} />
            <Tab label="Others" value={4} />
          </Tabs>
          <TabPanel className="panel" value={mainTab} index={0}>
            <div className="flex-grid">
              {tools.map((src, index) => (
                <img key={index} src={src} alt={`${index}`} />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="panel" value={mainTab} index={1}>
          <div className="flex-grid">
              {languages.map((src, index) => (
                <img key={index} src={src} alt={`${index}`} />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="panel" value={mainTab} index={2}>
          <div className="flex-grid">
              {databases.map((src, index) => (
                <img key={index} src={src} alt={`${index}`} />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="panel" value={mainTab} index={3}>
          <div className="flex-grid">
              {libraries.map((src, index) => (
                <img key={index} src={src} alt={`${index}`} />
              ))}
            </div>
          </TabPanel>
          <TabPanel className="panel" value={mainTab} index={4}>
          <div className="flex-grid">
              {others.map((src, index) => (
                <img key={index} src={src} alt={`${index}`} />
              ))}
            </div>
          </TabPanel>
        </Box>
      </div>
    </section>
  );
}

export default Skills;