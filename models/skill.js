// const { create } = require("../controllers/skills");

const skills = [
    {id: 888, skill: 'Awesome Programmer', status: true},
    {id: 8888, skill: 'Javascript Expert', status: true},
    {id: 88888, skill: 'Fast Learner', status: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };

  function deleteOne(id) {
    const idx = skills.findIndex(todo => skills.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function create(skill) {
    skill.id= Date.now() % 1000000;
    skill.status = false;
    skills.push(skill);
  }
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
      id = parseInt(id);
      return skills.find(skill => skill.id === id);
  }