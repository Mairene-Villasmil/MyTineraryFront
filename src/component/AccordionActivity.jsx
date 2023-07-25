import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            color: 'black',
            fontFamily: '"Lucida Console", Monaco, monospace',
          }}
        >
          <Typography style={{ color: '#3a0868' }}>What is included</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: '#3a0868' }}>
            <ul>
              <Typography style={{ color: '#3a0868' }}>All our packages include</Typography>
              <li>Guided visit</li>
              <li>Help from instructors for activities</li>
              <li>First aid assistance</li>
              <li>Round trip transportation</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            color: 'black',
            fontFamily: '"Lucida Console", Monaco, monospace',
          }}
        >
          <Typography style={{ color: '#3a0868' }}>Departure and Return</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: '#3a0868' }}>
            Our activities include transportation to take you from your accommodation to the starting point and at the end they take you back to guarantee your comfort.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            color: 'black',
            fontFamily: '"Lucida Console", Monaco, monospace',
          }}
        >
          <Typography style={{ color: '#3a0868' }}>Cancellation Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: '#3a0868' }}>
            Our cancellation policy allows you to cancel your activity up to one day before the date for any inconvenience that may arise and you have up to 30 days to reschedule.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{
            color: 'black',
            fontFamily: '"Lucida Console", Monaco, monospace',
          }}
        >
          <Typography style={{ color: '#3a0868' }}>Frequent Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ color: '#3a0868' }}>
            <ul>
              <li>Question 1: What type of accommodation is offered on the tours? <br />
                Answer 1: Our tours offer a variety of accommodation options, from luxury hotels to boutique accommodation and country houses. We carefully select the accommodations to ensure that they meet high standards of quality and comfort.</li>
              <li>Question 2: How many people are in each tour group? <br />
                Answer 2: Our travel groups usually have a maximum size of 16 people, which allows us to provide a more personalized experience and individual attention to each traveler.</li>
              <li>Question 3: What kind of activities and excursions are included in the tours? <br />
                Answer 3: Our tours include a variety of exciting and enriching activities and excursions. This can include visits to historical sites, walks through natural landscapes, culinary experiences, encounters with local culture, and much more. The detailed itinerary of each tour will specify the activities included.</li>
              <li>Question 4: Are meals included in the tours? <br />
                Answer 4: Yes, meals are included as specified in the itinerary. This can vary depending on the tour, but we generally include selected breakfasts, lunches and dinners to give you an authentic taste of the local gastronomy.</li>
              <li>Question 5: What travel documents do I need to bring? <br />
                Answer 5: For our international tours, we recommend that you bring your valid passport with at least 6 months remaining. Also, it is important to check the visa and vaccination requirements for the country or countries you will be visiting. We will provide you with detailed information on the specific requirements before your trip.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default BasicAccordion;