import React from 'react';

const skillProgressBar = ({ skill, level, color }) => {
  return (
    <div className="flex">
      <div className="text-sm w-32">{skill}</div>
      <div className="flex-1">
        <div className="bg-gray-400 h-4 rounded-full">
          <div
            className={`bg-${color}-500 h-4 rounded-full w-${level}`}
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

const SkillsList = ({ skills }) => {
  return (
    <div>
      {skills.map(skill => (
        <skillProgressBar
          key={skill.name}
          skill={skill.name}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
};

export default SkillsList;
