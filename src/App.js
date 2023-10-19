import React from 'react';
import './index.css';
import { profiles } from './data';

export default function App() {
  return (
    <div className='cards'>
      {profiles.map((profile) => (
        <Card
          key={profile.name}
          photo={profile.photo}
          name={profile.name}
          description={profile.description}
          skills={profile.skills}
        />
      ))}
    </div>
  );
}

function Card({ photo, name, description, skills }) {
  return (
    <div className='card'>
      <Avatar photo={photo} />
      <div className='data'>
        <Info name={name} description={description} />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar({ photo }) {
  return <img className='avatar' src={photo} alt='alena' />;
}

function Info({ name, description }) {
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  );
}

function SkillList({ skills }) {
  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill key={skill.skill} skill={skill.skill} color={skill.color} />
      ))}{' '}
    </div>
  );
}

function Skill({ skill, color }) {
  const style = {
    backgroundColor: color,
  };
  return (
    <span className='skill' style={style}>
      {skill}
    </span>
  );
}
