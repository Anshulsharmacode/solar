import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';

const CustomerTestimonials: React.FC = () => {
  return (
    <Container>
      <Box textAlign="center" my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hear from Our Happy Customers
        </Typography>
        <Typography variant="body1">
          Our on-grid solar systems have transformed the energy experience for countless households.
          Don't just take our word for it – read these real stories from our satisfied customers who
          have benefited from our end-to-end solutions. See how we've helped them achieve energy independence,
          save on energy costs, and contribute to a sustainable future.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h3">
                Customer 1
              </Typography>
              <Typography variant="body2">
                Achieved energy independence and saved on energy costs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h3">
                Customer 2
              </Typography>
              <Typography variant="body2">
                Enjoying the benefits of a sustainable future.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h3">
                Customer 3
              </Typography>
              <Typography variant="body2">
                Transformed their energy experience with our solar systems.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomerTestimonials;