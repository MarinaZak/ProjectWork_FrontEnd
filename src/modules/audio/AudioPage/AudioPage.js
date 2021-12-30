import React from 'react';
import './AudioPage.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img1 from '../../../images/dp.jpg'
import img2 from '../../../images/mi.jpg'
import img3 from '../../../images/ib.jpg'
import img4 from '../../../images/fs.jpg'
import img5 from '../../../images/st.jpg'
import img6 from '../../../images/mf.jpg'
import img7 from '../../../images/f.jpg'
import img8 from '../../../images/pps.jpg'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { CardActionArea } from '@mui/material'
import { NavLink } from 'react-router-dom';
import VAmenu from '../../VAmenu/VAmenu'

class AudioPage extends React.Component {

  categories = [
    {'title': 'Мій Франко', 'image': img6, 'page': 'miy-franko'},
    {'title': 'Філософські сніданки', 'image': img4, 'page': 'filosofski-snidanky'},
    {'title': 'Semper tiro', 'image': img5, 'page': 'semper-tiro'},
    {'title': 'Інтелектуальна біографія', 'image': img3, 'page': 'intelektualna-biografiya'},
    {'title': 'Мій Ізмарагд', 'image': img2, 'page': 'miy-izmaragd'},
    {'title': 'Дім Поета', 'image': img1, 'page': 'dim-poeta'},
    {'title': 'Франкустика', 'image': img7, 'page': 'frankustyka'},
    {'title': 'Події поза серіями', 'image': img8, 'page': 'podiyi-poza-seriyamy'}
  ]

  render() {
    return (
      <div style={{marginBlock: '100px'}}>
        <VAmenu/>
        <Container maxWidth="lg" style={{backgroundColor: 'white', padding: '50px'}}>
          <Typography variant="h2" color="initial">Аудіо</Typography>
          <Grid container spacing={1} style={{ marginTop: '50px' }} >
            {this.categories.map(function(category) {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <NavLink to={"/audio/"+category.page}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={category.image}
                      />
                      <CardContent>
                        <Typography style={{color: 'black'}} gutterBottom variant="h3" component="div">
                          {category.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  </NavLink>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </div>
    )
  }
}


AudioPage.propTypes = {};
  
AudioPage.defaultProps = {};

export default AudioPage;