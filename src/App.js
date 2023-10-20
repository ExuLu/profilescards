import React from 'react';
import './index.css';
import { profiles } from './data';

export default function App() {
  return (
    <div className='cards'>
      {profiles.map((profile) => (
        <Card key={profile.name} profileObj={profile} />
      ))}
    </div>
  );
}

function Card({ profileObj }) {
  const { photo, name, description, skills } = profileObj;

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
        <Skill key={skill.skill} skillObj={skill} />
      ))}{' '}
    </div>
  );
}

function Skill({ skillObj }) {
  const { skill, level, color } = skillObj;
  const style = {
    backgroundColor: color,
  };

  return (
    <div className='skill' style={style}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && '🐣'}
        {level === 'intermediate' && '💪'}
        {level === 'advanced' && '😎'}
      </span>
    </div>
  );
}
