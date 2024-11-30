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
    '/images/tools/figma.svg',
    '/images/tools/github.svg',
    '/images/tools/microsoft-excel.svg',
    '/images/tools/slack.svg',
    '/images/tools/visual-studio-code.svg',
    '/images/tools/zeplin.svg',
    '/images/tools/jira.svg',
    '/images/tools/subversion.svg',
  ];

  const languages = [
    '/images/languages/java.svg',
    '/images/languages/javascript.svg',
    '/images/languages/dot-net.svg',
    '/images/languages/html.svg',
    '/images/languages/css.svg',
    '/images/languages/vba.svg',
  ];

  const databases = [
    '/images/databases/mysql.svg',
    '/images/databases/sql-server.svg',
  ];

  const libraries = [
    '/images/libraries/react.svg',
    '/images/libraries/node-js.svg',
    '/images/libraries/bootstrap-5.svg',
    '/images/libraries/adapt.svg',
    '/images/libraries/codeigniter.svg',
  ];

  const others = [
    '/images/others/apple.svg',
    '/images/others/windows.svg',
    '/images/others/sap.svg',
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
            <Tab label="Frameworks & Libraries" value={3} />
            <Tab label="Others" value={4} />
          </Tabs>
          <TabPanel className="panel" value={mainTab} index={0}>
            <div className="cards">
            {tools.map((src, index) => (
              <div className='card'>  
                  <img key={index} src={src} alt={`${index}`} />
              </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="panel" value={mainTab} index={1}>
          <div className="cards">
            {languages.map((src, index) => (
              <div className='card'>  
                  <img key={index} src={src} alt={`${index}`} />
              </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="panel" value={mainTab} index={2}>
          <div className="cards">
            {databases.map((src, index) => (
              <div className='card'>  
                  <img key={index} src={src} alt={`${index}`} />
              </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="panel" value={mainTab} index={3}>
          <div className="cards">
            {libraries.map((src, index) => (
              <div className='card'>  
                  <img key={index} src={src} alt={`${index}`} />
              </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="panel" value={mainTab} index={4}>
          <div className="cards">
            {others.map((src, index) => (
              <div className='card'>  
                  <img key={index} src={src} alt={`${index}`} />
              </div>
              ))}
            </div>
          </TabPanel>
        </Box>
      </div>
    </section>
  );
}

export default Skills;