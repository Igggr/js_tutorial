// Перепишите с использованием функции-стрелки.

function ask(question: string, yes: Function, no: Function) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => { alert("Вы согласились."); },
  () => { alert("Вы отменили выполнение."); }
);