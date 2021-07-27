import React from 'react';
import '../../App.css';
import './Activities.css';
import CardItem from './items';
import Footer from '../Footer';

 function Activities(props) {
  let content = {
    English: {
      title: "Our Activities",
      camp: "Descover our outdoor camp sites",
      forest: "Experiment in the forest",
      sea: "Experiment in the sea",
      mountain: "Experiment with air in the sky",
      img4: "Robotics",
      Description: "Teach kids how to build a battery powered robot from scratch with the monitors supervision.",
      img5: "Bottle Rockets",
      Description1: "Using chemistry, a simple chemical reaction sets these bottles blasting off.",
      img6: "Bursting Chemistry Solution",
      Description2: "Teach kids about atoms and elements, then experiment with mixtures and solutions.",
      img7: "Code a minecraft game",
      Description3: "This activity serves as a great introduction to the basic concepts of coding, while being fun and involving all campers.",
      img8: "Pool Noodle Periscope",
      Description4: "A great engineering challenge that explores the science of image refraction.",
      img9: "Build a solar oven ",
      Description5: "Make a solar oven to make s'mores based on a design from NASA.",
      img10: "Ocean Exploration Tools",
      Description6: "This activity is mainly for high school students and deals with math. Students will design tools for ocean exploration.",
      img11: "Air and Atmosphere",
      Description7: "Provides an introduction to the properties of air and gases through an investigative and problem solving approach.",
      img12: "Code a Robot",
      Description8: "Code a bot using EdPython and Edbarcode.",

    },
    French: {
      title: "Nos activités",
      camp: "Découvrez nos camps exterieurs",
      forest: "Expérimentez dans les forêts",
      sea: "Expérimentez avec l'eau",
      mountain: "Expérimentez en plein-air",
      img4: "Robotique",
      Description: "Apprenez aux enfants à construire un robot alimenté par batterie à partir de zéro avec la supervision des moniteurs",
      img5: "Bouteille Fusées",
      Description1: "En utilisant la chimie, une simple réaction chimique déclenche l'explosion de ces bouteilles. ",
      img6: "Solution chimique éclatante",
      Description2: "Enseignez les enfants les atomes et les éléments, puis expérimentez avec des mélanges et des solutions",
      img7: "Coder un jeu minecraft",
      Description3: "Cette activité constitue une excellente introduction aux concepts de base du codage, tout en étant amusante et impliquant tous les campeurs.",
      img8: "Périscope de nouilles de piscine",
      Description4: "Un grand défi d'ingénierie qui explore la science de la réfraction des images.",
      img9: "Construire un four solaire",
      Description5: "Fabriquez un four solaire pour faire des s'mores sur la base d'un design de la NASA.",
      img10: "Outils d'exploration océanique",
      Description6: "Cette activité s'adresse principalement aux élèves du secondaire et porte sur les mathématiques. Les élèves concevront des outils pour l'exploration des océans !",
      img11: "Air and Atmosphere",
      Description7: "Fournit une introduction aux propriétés de l'air et des gaz à travers une approche d'enquête et de résolution de problèmes.",
      img12: "Coder un robot",
      Description8: "Codez un bot en utilisant EdPython et Edbarcode.",

    }
  };

  props.language === "French"
    ? (content = content.French)
    : (content = content.English);

  return (
    <div className='app2'>
    <div className='cards'>
      <h1>{content.camp} <i class="fab fa-periscope"></i></h1>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/forest2.jpeg'
              text={content.forest}
              path='/services'
            />
            <CardItem
              src='images/ocean.jpeg'
              text={content.sea}
              path='/services'
            />

            <CardItem
              src='images/mountain.png'
              text={content.mountain}
              path='/services'
            />
          </ul>
          </div>
          <h1>{content.title} <i class="fas fa-gamepad"></i></h1>
        <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/robotics.jpeg'
              text={content.img4}
             label= {content.Description}
              path='/services'
            />
            <CardItem
              src='images/rocket.jpeg'
              text={content.img5}
              label={content.Description1}
              path='/products'
            />
            <CardItem
              src='images/Bursting Chemistry Solution.jpeg'
              text={content.img6}
              label={content.Description2}
              path='/products'
            />

          </ul>

      </div>
<div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/code.jpg'
              text={content.img7}
             label={content.Description3}
              path='/services'
            />
            <CardItem
              src='images/scope.jpeg'
              text={content.img8}
             label={content.Description4}
              path='/services'
            />
            <CardItem
              src='images/smores.jpg'
              text={content.img9}
             label={content.Description5}
              path='/services'
            />
            </ul>

      </div>
      <div className='cards__wrapper'>

          <ul className='cards__items'>
            <CardItem
              src='images/ocean.png'
              text={content.img10}
              label={content.Description6}
              path='/services'
            />
            <CardItem
              src='images/air.jpeg'
              text={content.img11}
              label={content.Description7}
              path='/services'
            />
            <CardItem
              src='images/bot.jpeg'
              text={content.img12}
              label={content.Description8}
              path='/services'
            />
            </ul>
      </div>
      </div>
      <Footer/>
    </div>

  );
}

export default Activities;

