import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Past Years Adventures! <i class="fas fa-camera"></i></h1>

        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/land.jpeg'
              text='Experiment in the land'
              //label='Land'
              path='/services'
            />
            <CardItem
              src='images/sea2.jpeg'
              text='Experiment in the sea'
             // label='Sea'
              path='/services'
            />

            <CardItem
              src='images/air.jpg'
              text='Experiment in the sky'
             // label='Sky'
              path='/services'
            />
          </ul>
          </div>
          <h1>Learn more about our Activities <i class="fas fa-gamepad"></i></h1>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/robotics.jpeg'
              text='Robotics'
             // label='New experience'
              path='/services'
            />
            <CardItem
              src='images/rocket.jpeg'
              text='Bottle Rockets'
             // label='Fun'
              path='/products'
            />
            <CardItem
              src='images/Bursting Chemistry Solution.jpeg'
              text='Bursting Chemistry Solution'
             // label='Workout'
              path='/Register'
            />
          </ul>

      </div>

    </div>
  );
}

export default Cards;
