// 1 Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
  name: "Василий Иванович",
  age: 35
};

const copy = JSON.parse(JSON.stringify(user));

// 2 Исключить обратные ссылки
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  // @ts-ignore
  room.occupiedBy = meetup;
  // @ts-ignore
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key === 'self' || key === 'occupiedBy') ? undefined : value;
  }));
  
  /* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */