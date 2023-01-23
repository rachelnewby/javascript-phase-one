const cohort = {
  name: 'December 2022',
  id: 1234,
  students: ["Rachel", "Adam", "Ju", "Alex", "Marta", "Luiz", "Josh"]
};

const printDetails = (object) => {
  sentence = (`${object['id']} - ${object['name']} - ${object.students.length}`);
  console.log(sentence);
}

printDetails(cohort);
