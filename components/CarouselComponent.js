import React , {Component} from 'react';
import { View, Text,Platform, FlatList, Button, ScrollView} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Card } from 'react-native-elements';
import c from '../images/c.jpg';
import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import i from '../images/icon.png';

class CarouselComponent extends Component{

  componentDidMount(){
    this._carousel.startAutoplay();
  } 

  state = {carouselItems:[
    {image:c , desc:"A cute dog"},
    {image:c1, desc:"Poniiii"},
    {image:c2, desc:"Need Fluff ?"},
    {image:c3, desc:"I am POTATO"},
  ],
  data:[
    {
      image:i,
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      button:"Press ME"
    },
    {
      image:i,
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      button:"or ME"
    },
    {
      image:i,
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      button:"Me please"
    },
    {
      image:i,
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      button:"Don't ME"
    },
  ]
  ,
  "activeSlide":0};

  _renderItem({item, index}){
    return(
      <Card
      image={item.image}
      >
        <Text>{item.desc}</Text>
      </Card>
    );

  }

  get pagination(){
    const entries = this.state.carouselItems.length;
    const {activeSlide} = this.state;
      return (
        <Pagination
          dotsLength={entries}
          activeDotIndex={activeSlide}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      );
  }

  renderCard({item, index}){
    return(
      <Card
      containerStyle={{width:200, height:280, padding:10, marginBottom:30}}
      imageStyle={{height:100}}
      image={item.image}
      >
        <Text
        style={{margin:10}}
        >{item.desc}</Text>
        <Button
        title={item.button}
        />
      </Card>
    );

  }

  render(){
    return(
      <ScrollView>

        <View style={{ alignItems: 'center', justifyContent: 'center',}}>
          <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.carouselItems}        
          sliderWidth={300}
          itemWidth={300}
          renderItem={this._renderItem}
          onSnapToItem={(index) => this.setState({ activeSlide: index }) }
          />
          {this.pagination}
          

          <FlatList
          data={this.state.data}
          renderItem={(item)=>this.renderCard(item)}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          />
        </View>
      </ScrollView>
    );
  }
}

export default CarouselComponent;