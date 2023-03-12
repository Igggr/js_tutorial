// Перепишите с использованием функции-стрелки.
type Callback = () => void;

function ask(question: string, yes: Callback, no: Callback) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Вы согласны?",
  () => { alert("Вы согласились."); },
  () => { alert("Вы отменили выполнение."); }
);