// write code here
const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];

  let result = persons.reduce((acc , cur) =>{
        if (!acc[cur.sex]) {
            acc[cur.sex] = [];
        }
        acc[cur.sex].push(cur.name);
        return acc
  },{});

  console.log(result);