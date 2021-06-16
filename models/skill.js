const skills = [
    {id: 888, skill: 'Awesome Programmer', status: true},
    {id: 8888, skill: 'Javascript Expert', status: true},
    {id: 88888, skill: 'Fast Learner', status: true}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
      id = parseInt(id);
      return skills.find(skill => skill.id === id);
  }