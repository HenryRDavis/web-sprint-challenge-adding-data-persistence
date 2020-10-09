
exports.seed = function(knex) {
  const resources = [
    {
      resource_name: 'Spoon',
      description: 'Silver thing'
    },
    {
      resource_name: 'Fork',
      description: 'Silver thingy'
    },
    {
      resource_name: 'Knife',
      description: 'Silver cut'
    },
    {
      resource_name: 'little spoon',
      description: 'small silver thing'
    },
    {
      resource_name: 'little fork',
      description: 'small thingy'
    },
  ]
  return knex('resources').insert(resources)
};
