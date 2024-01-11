'use client'

import React from 'react';
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import './create.css';
import ExerciseCard from "@/app/components/Exercise/ExerciseCard";
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation"; 
import { RootState } from '@/app/_redux/store';

export default function Create() {
  const router = useRouter();
  

  const exercises = [
    { title: 'The Daring Adventure of Captain Sam and the Lost Treasure', description: 'Captain Sam was a brave and daring explorer who sailed the seven seas in search of hidden treasures. With his loyal crew by his side, he had embarked on countless adventures. Today, Captain Sam had set his sights on a legendary treasure said to be buried on the mysterious Whispering Island. As they approached the island, the crew heard strange sounds coming from the thick jungle. Captain Sam, always curious, decided to investigate. They ventured deep into the jungle, following the mysterious sounds that seemed to whisper secrets. Suddenly, they stumbled upon a massive cave entrance hidden behind lush vegetation. Captain Sam and his crew entered cautiously, their torches illuminating the dark, damp cave. Inside, they discovered a treasure chest glistening with gold and jewels, but there was a problem. A gigantic stone blocked their way to the treasure, and it had an inscription that read, "To pass, you must speak the magical words: Serpents slither silently on sandy shores. Captain Sam knew that to unlock the treasure, they had to pronounce those words perfectly. The crew took turns, practicing the tricky "s" sound while Captain Sam gave them guidance. Lets try it together now, Captain Sam suggested, and they repeated the phrase, Serpents slither silently on sandy shores, until their s sounds were spot on. With determination and teamwork, they managed to pronounce the words flawlessly, and the stone door slowly swung open. The treasure was finally theirs! Captain Sam and his crew celebrated their victory, and they decided to share their newfound wealth with the islands inhabitants, who had been whispering secrets all along. They returned to their ship, their speech sounds greatly improved, and set sail for more adventures. The end.', ingress: 'This exercise aims to help the child improve his speech sounds, specifically the s, r and l sounds. The therapist will guide the child through reading an exciting story out loud, focusing on correct pronunciation and articulation. The goal is to make the exercise engaging and enjoyable while addressing the speech difficulties. The exercise is expected to take approximately 20-25 minutes.'},
    { title: 'R and S words', description: 'The rabbit quickly hopped away. Sammy found seven shiny seashells by the shore. A strong breeze rustled the leaves in the trees. Sarah sang a sweet song at the school concert. The red car raced down the winding roa Robert read a thrilling adventure story. Samanthas sister shared her sandwich. Rogers soccer team won the championship. The sun set behind the mountains. Susans cat likes to chase birds. The sailor set sail on the sea. A sparkling river flowed through the forest. The sports car sped down the highway. Rachel made a scrumptious chocolate cake. Sams kite soared high in the sky. The snake slithered silently through the grass. Rosies roses bloomed beautifully in the garden. The squirrel stored nuts for the winter. The rain showered the garden with water. Ricky rode his bike down the steep hill. Encourage the child to listen carefully to each sentence and identify words that contain the r and s sounds. This exercise will help improve speech sound recognition.', ingress: 'This exercise is designed to enhance the childs recognition and discrimination skills for the r and s sounds in speech. The therapist will provide a list of 20 sentences, and the child will need to identify words that contain these focus sounds. This exercise is expected to take approximately 20 minutes to complete.'},
    { title: 'Mime Game', description: 'Words in the Exercise (with Mime Instructions): Rocket: Mime as if youre launching a rocket into the sky. Snake: Make a slithering motion with your hand. Robot: Move your arms and legs stiffly, like a robot. Surfing: Pretend to ride a surfboard on ocean waves. Roaring: Open your mouth wide and make a roaring sound. Scissors: Make a cutting motion with your fingers. Star: Use your fingers to create a star shape. Spider: Pretend to crawl like a spider with your fingers. Soccer: Mime kicking a soccer ball. Rabbit: Wiggle your nose like a rabbit. Snail: Move your hand slowly, like a snails pace. Sword: Pretend to wield a sword in your hand. Sailing: Act like youare holding a sail and steering a boat. Rollercoaster: Pretend to ride a rollercoaster with your arms up. Raining: Use your fingers to mimic falling raindrops. Snoring: Pretend to snore loudly. Racecar: Mime holding a steering wheel and driving fast. Sizzling: Act as if youre frying something in a pan. Starfish: Extend your arms and legs like a starfish. Rooster: Pretend to crow like a rooster. Seashell: Hold your hands in a cup shape like a seashell. Sailboat: Pretend to hold a sail and steer a boat. Surfboard: Act like youre balancing on a surfboard. Scuba diving: Pretend to dive underwater with a snorkel. Ring: Make a circular motion with your fingers. Rocketship: Mime launching a rocket into space. Sunflower: Pretend to grow taller like a sunflower. Racing car: Hold a steering wheel and mime driving. Starry night: Point to the imaginary stars in the sky. Superhero: Pretend to fly and save the day like a superhero. Enjoy the exercise, and encourage the child to guess the words based on your mimes. This will help him become more aware of the "r" and "s" sounds in different words.', ingress: 'In this exercise, the therapist will help the child improve his speech sound recognition by providing 30 words for the child to guess based on mime. The focus will be on words containing the "r" and "s" sounds. The therapist should mime each word, and the child will guess the word based on the mime. This exercise aims to enhance the childs speech sound awareness and articulation. It is expected to take approximately 20-25 minutes.'}
  ]

  const onHandleNotes = () => {
  }

  const onHandleBack = () => {   
    router.push(`/session/1`);
  }

  const onHandleSave = () => { 
    router.push(`/sessionStart`);
  }

  return (
    <Card className="createCard">
      <CardHeader className="sessionHeader">
        Create Session
      </CardHeader>
      <p className="exercisesText">Exercises</p>
      <p className="timeText">60 minutes</p>
      <CardBody className="createBody">
        <Card className="exerciseCard">
          {exercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Card>
        <Button className="addNotesButton" onClick={onHandleNotes}>Add Notes</Button>
        <div className="flex flex-row gap-y-4">
          <Button className="goBackButton" onClick={onHandleBack}>Go Back</Button>
          <Button className="saveButton" onClick={onHandleSave}>Start Session</Button>
        </div>
      </CardBody>
    </Card>
  );
}
